// Scroll dos Cards
document.addEventListener('DOMContentLoaded', () => {
  const centroCards = document.querySelector('.CentroCards');

  if (!centroCards) return;

  centroCards.addEventListener(
    'wheel',
    (event) => {
      event.preventDefault();
      centroCards.scrollLeft += event.deltaY * 2;
    },
    { passive: false }
  );
});