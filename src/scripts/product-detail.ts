import { grinds, products, sizes } from '../config/products';
import { money, priceFor } from '../utils/format';

const root = document.querySelector<HTMLElement>('[data-product-detail]')!;
const product = products.find((p) => p.slug === root.dataset.slug)!;

const state = { size: 0, grind: 0, mode: 0 };

const group = (name: string) => root.querySelectorAll<HTMLElement>(`[data-group="${name}"] [data-index]`);

function render() {
  const total = priceFor(product.base, state.size, state.mode === 1);
  document.querySelectorAll('[data-total]').forEach((el) => (el.textContent = money(total)));

  (['size', 'grind'] as const).forEach((key) =>
    group(key).forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.index) === state[key]))),
  );
  group('mode').forEach((el, i) => {
    const on = state.mode === i;
    el.classList.toggle('border-caramel', on);
    el.classList.toggle('border-roast', !on);
    el.querySelector('[data-dot]')?.classList.toggle('bg-caramel', on);
  });
  root.querySelectorAll<HTMLElement>('[data-mode-price]').forEach((el, i) => {
    el.textContent = money(priceFor(product.base, state.size, i === 1));
  });
}

root.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-index]');
  const key = el?.closest<HTMLElement>('[data-group]')?.dataset.group as keyof typeof state | undefined;
  if (el && key) {
    state[key] = Number(el.dataset.index);
    render();
  }
});

document.querySelectorAll('[data-add-current]').forEach((btn) =>
  btn.addEventListener('click', () =>
    document.dispatchEvent(
      new CustomEvent('cart:add', {
        detail: {
          name: product.name,
          sub: `${sizes[state.size].label} · ${grinds[state.grind]}${state.mode ? ' · Suscripción' : ''}`,
          price: priceFor(product.base, state.size, state.mode === 1),
        },
      }),
    ),
  ),
);

render();
