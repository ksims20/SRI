// JavaScript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

// Function to handle navigation and video playback
var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
    slide.pause(); // Pause all slides
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");

  const activeIndex = Array.from(btns).indexOf(btns[manual]);

  slides.forEach((slide, index) => {
    if (index === activeIndex) {
      // Set the source and play the video of the active slide
      slide.src = `${index + 1}.mp4`;
      slide.play();
    } else {
      slide.src = "";
    }
  });
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Pause videos when navigating away from the current content
contents.forEach((content, index) => {
  content.addEventListener("mouseleave", () => {
    slides[index].pause();
  });
});
