document.addEventListener("DOMContentLoaded", () => {
  // SLIDER LOGIC
  const initSlider = (trackId, prevBtnId, nextBtnId, dotsSelector) => {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const dots = document.querySelectorAll(dotsSelector);

    if (!track || !prevBtn || !nextBtn) return;

    const getScrollAmount = () => {
      const card = track.children[0];
      if (!card) return 300;

      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.gap) || 20;

      return card.offsetWidth + gap;
    };

    const updateDots = () => {
      const scrollAmount = getScrollAmount();
      if (scrollAmount === 0) return;

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

    // CLICK ON DOTS (ADDITIONAL)
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        track.scrollTo({
          left: index * getScrollAmount(),
          behavior: "smooth",
        });
      });
    });

    track.addEventListener("scroll", updateDots);
  };

  initSlider("reviewsTrack", "prevBtn", "nextBtn", ".patient-reviews .dot");

  initSlider("stepsTrack", "stepsPrevBtn", "stepsNextBtn", ".steps-dots .dot");
});
