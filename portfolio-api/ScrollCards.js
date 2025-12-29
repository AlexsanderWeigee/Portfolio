document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".CentroCards");
  if (!container) return;

  // Mouse (desktop)
  container.addEventListener(
  "wheel",
  (e) => {
    // Se o scroll veio de um texto interno, NÃO interferir
    if (e.target.closest(".card__Texto")) return;

    e.preventDefault();
    container.scrollLeft += e.deltaY;
  },
  { passive: false }
);

  // Touch (mobile)
  let startX = 0;
  let scrollLeft = 0;

  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX;
    const walk = startX - x;
    container.scrollLeft = scrollLeft + walk;
  });
});

// Scroll dos Cards
// document.addEventListener('DOMContentLoaded', () => {
//   const centroCards = document.querySelector('.CentroCards');

//   if (!centroCards) return;

//   centroCards.addEventListener(
//     'wheel',
//     (event) => {
//       event.preventDefault();
//       centroCards.scrollLeft += event.deltaY * 2;
//     },
//     { passive: false }
//   );
// });