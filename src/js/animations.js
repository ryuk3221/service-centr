gsap.registerPlugin(ScrollTrigger);

if (document.querySelector('.home-page')) {
  gsap.from('.banner__title', {
    opacity: 0,
    x: -200,
    duration: 0.7
  });

  gsap.from('.banner__text', {
    opacity: 0,
    x: -200,
    delay: 0.3,
    duration: 0.7
  });

  gsap.from('.banner-btn', {
    opacity: 0,
    x: -200,
    delay: 0.7,
    duration: 0.7
  });

  gsap.from('.banner-img', {
    y: 600,
    delay: 0.7,
    duration: 0.7
  });

  gsap.from('.services__item', {
    y: 50,
    x: 50,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".services",
      start: "20% 70%"
    }
  });

  gsap.from('.work-container', {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: {
      trigger: ".work-container",
      start: "10% 70%"
    }
  });


  gsap.to(".about-numbers1", {
    innerText: 2014, // Конечное значение
    duration: 1.5,
    snap: { innerText: 1 }, // Целочисленные значения
    scrollTrigger: {
      trigger: ".about-numbers",
      start: "-20% center"
    }
  });

  gsap.to(".about-numbers2", {
    innerText: 35, // Конечное значение
    duration: 2,
    snap: { innerText: 1 }, // Целочисленные значения
    scrollTrigger: {
      trigger: ".about-numbers",
      start: "-20% center"
    }
  });

  gsap.to(".about-numbers3", {
    innerText: 12458, // Конечное значение
    duration: 3,
    snap: { innerText: 1 }, // Целочисленные значения
    scrollTrigger: {
      trigger: ".about-numbers",
      start: "-30% center"
    }
  });

  gsap.to(".about-numbers4", {
    innerText: 70, // Конечное значение
    duration: 3.5,
    snap: { innerText: 1 }, // Целочисленные значения
    scrollTrigger: {
      trigger: ".about-numbers",
      start: "-30% center"
    }
  });
}