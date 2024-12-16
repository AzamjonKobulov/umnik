// Initialize select functionality
document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".select");

  selects.forEach((select) => {
    const button = select.querySelector(".select-button");
    const list = select.querySelector(".select-list");
    const icon = select.querySelector(".select-icon");
    const label = select.querySelector(".select-label");

    // Toggle select
    button.addEventListener("click", (e) => {
      e.preventDefault();
      list.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });

    // Select option
    list.addEventListener("click", (e) => {
      const target = e.target.closest("li");
      if (!target) return;

      label.textContent = target.dataset.value;
      list.classList.add("hidden");
      icon.classList.remove("rotate-180");
    });

    // Close select when clicking outside
    document.addEventListener("click", (e) => {
      if (!select.contains(e.target)) {
        list.classList.add("hidden");
        icon.classList.remove("rotate-180");
      }
    });
  });
});

// Swipers

// Reviews Swiper
var swiper = new Swiper(".reviesSwiper", {
  navigation: {
    nextEl: ".slider-reviews-next",
    prevEl: ".slider-reviews-prev",
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  },
});

// Articles Swiper
var swiper = new Swiper(".articlesSwiper", {
  navigation: {
    nextEl: ".slider-articles-next",
    prevEl: ".slider-articles-prev",
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2.6,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Other Programs
var swiper = new Swiper(".otherProgramsSwiper", {
  navigation: {
    nextEl: ".slider-programs-next",
    prevEl: ".slider-programs-prev",
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// News
var swiper = new Swiper(".newsSwiper", {
  navigation: {
    nextEl: ".slider-news-next",
    prevEl: ".slider-news-prev",
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
