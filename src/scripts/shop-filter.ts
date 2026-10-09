const buttons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
const cards = document.querySelectorAll<HTMLElement>('[data-product]');
const count = document.querySelector('[data-count]');

function apply(filter: string) {
  let shown = 0;
  cards.forEach((card) => {
    const match = filter === 'Todos' || card.dataset.type === filter || card.dataset.roast === filter;
    card.classList.toggle('hidden', !match);
    if (match) shown++;
  });
  buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
  if (count) count.textContent = `${shown} productos`;
}

buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter!)));
