const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');

toggle?.addEventListener('click', () => {
  const open = menu?.classList.toggle('hidden') === false;
  toggle.setAttribute('aria-expanded', String(open));
});
