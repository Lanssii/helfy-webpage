document.addEventListener("DOMContentLoaded", () => {
  // GET ELEMENTS
  const track = document.getElementById("reviewsTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dots = document.querySelectorAll(".dot");

  if (!track || !prevBtn || !nextBtn) return;

  // Width of one card + gap
  const getScrollAmount = () => {
    const card = track.querySelector(".review-card");

    if (!card) return 300;

    const gap = 20;

    return card.offsetWidth + gap;
  };

  // UPDATE ACTIVE PAGINATION DOT
  const updateDots = () => {
    const scrollAmount = getScrollAmount();

    const currentSlide = Math.round(track.scrollLeft / scrollAmount);

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  };

  // NEXT BUTTON
  nextBtn.addEventListener("click", () => {
    track.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  });

  // PREVIOUS BUTTON
  prevBtn.addEventListener("click", () => {
    track.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  });

  // UPDATING DOTS WHILE SCROLLING
  track.addEventListener("scroll", updateDots);
});
