import '../scss/style.scss'

//скрипты для выпадашек в секции "Вопросы"
if (document.querySelector('.questions')) {
  const section = document.querySelector('.questions');
  const items = section.querySelectorAll('.questions__item');

  section.addEventListener('click', event => {
    const parent = event.target.closest('.questions__item');
    const content = parent.querySelector('.questions__item-text');

    items.forEach(item => {
      if (item == parent) {
        parent.classList.toggle('item--open');

        if (parent.classList.contains('item--open')) {
          content.style.height = content.scrollHeight + 'px';
        } else {
          content.style.height = '0px';
        }
      } else {
        item.classList.remove('item--open');
        item.querySelector('.questions__item-text').style.height = '0px';
      }
    });
  });
}

if (document.querySelector('#particles-js')) {
  particlesJS("particles-js",
    {
      "particles":
      {
        "number":
        {
          "value": 100,
          "density": { "enable": true, "value_area": 800 }
        }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 3 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.4182482500651045, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.09744926547616141, "sync": false } }, "size": { "value": 7, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
      }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
    }); var count_particles, update; count_particles = document.querySelector('.js-count-particles'); update = function () { if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
}

if (document.querySelector('.reviews')) {
  const slider = new Swiper('.reviews__inner', {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: '.reviews__pagination'
    },

  });
}



function init() {
  let map = new ymaps.Map('map', {
    center: [55.75229400669603, 37.62340324255365],
    zoom: 10,
  });

  let placemark = new ymaps.Placemark([55.67257506906082, 37.73403899999996], {}, {

  });

  map.geoObjects.add(placemark);
  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
};
ymaps.ready(init);