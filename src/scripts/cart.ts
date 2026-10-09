import { SITE } from '../config/site';
import { money } from '../utils/format';
import type { CartItem } from '../types/product';

const STORAGE_KEY = 'tulipan-cart';

const $ = <T extends HTMLElement>(sel: string) => document.querySelector<T>(sel);

function load(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch {
    return [];
  }
}

let cart = load();
let toastTimer: number | undefined;
let justAdded = false;

function replay(el: Element | null | undefined, cls: string) {
  if (!el) return;
  el.classList.remove(cls);
  void (el as HTMLElement).offsetWidth;
  el.classList.add(cls);
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {
    /* almacenamiento no disponible */
  }
}

function render() {
  const subtotal = cart.reduce((sum, c) => sum + c.price, 0);
  const left = Math.max(0, SITE.freeShippingFrom - subtotal);

  document.querySelectorAll('[data-cart-count]').forEach((el) => (el.textContent = String(cart.length)));
  $('[data-cart-empty]')?.classList.toggle('hidden', cart.length > 0);
  $('[data-cart-subtotal]')!.textContent = money(subtotal);
  $('[data-ship-msg]')!.textContent = left
    ? `Te faltan ${money(left)} para envío gratis`
    : 'Tienes envío gratis';
  const bar = $<HTMLElement>('[data-ship-bar]')!;
  bar.style.width = Math.min(100, (subtotal / SITE.freeShippingFrom) * 100) + '%';
  bar.classList.toggle('bg-olive-soft', !left);
  bar.classList.toggle('bg-caramel', !!left);
  $('[data-ship-msg]')!.classList.toggle('text-olive-soft', !left);

  const list = $('[data-cart-items]')!;
  const tpl = $<HTMLTemplateElement>('#cart-item-template')!;
  list.replaceChildren(
    ...cart.map((item, i) => {
      const node = tpl.content.cloneNode(true) as DocumentFragment;
      node.querySelector('[data-name]')!.textContent = item.name;
      node.querySelector('[data-sub]')!.textContent = item.sub;
      node.querySelector('[data-price]')!.textContent = money(item.price);
      if (justAdded && i === cart.length - 1) node.firstElementChild!.classList.add('anim-item');
      return node;
    }),
  );
  justAdded = false;
}

function setOpen(open: boolean) {
  $('[data-cart-drawer]')?.classList.toggle('hidden', !open);
  document.body.classList.toggle('overflow-hidden', open);
}

function add(item: CartItem) {
  cart = [...cart, item];
  save();
  justAdded = true;
  render();
  document.querySelectorAll('[data-cart-count]').forEach((el) => replay(el, 'anim-bump'));
  const toast = $('[data-toast]')!;
  toast.classList.remove('hidden');
  replay(toast, 'anim-toast');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.add('hidden'), 1600);
}

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.closest('[data-cart-toggle]')) {
    setOpen($('[data-cart-drawer]')?.classList.contains('hidden') ?? false);
    return;
  }
  const addBtn = target.closest<HTMLElement>('[data-add-to-cart]');
  if (addBtn) {
    e.preventDefault();
    e.stopPropagation();
    const { name, sub, price } = addBtn.dataset;
    add({ name: name!, sub: sub!, price: Number(price) });
  }
});

document.addEventListener('keydown', (e) => e.key === 'Escape' && setOpen(false));
document.addEventListener('cart:add', ((e: CustomEvent<CartItem>) => add(e.detail)) as EventListener);

render();
