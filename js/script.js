
const body = document.querySelector('body')
// -------------------->
// --------------------> BURGER MENU VARIABLES
// -------------------->
const burger = document.getElementById('burger-menu')
// -------------------->
// --------------------> /BURGER MENU VARIABLES
// -------------------->
// --------------------> ACCORDION VARIABLES
// -------------------->
// const accordion = document.querySelectorAll('.accordion__container-item')
// -------------------->
// --------------------> /ACCORDION VARIABLES
// -------------------->
// -------------------->
// --------------------> POPAP VARIABLES
// -------------------->
// const linksForPopap = document.querySelectorAll('.popap__link')
// const popapLinkClose = document.querySelectorAll('.popap__container-content-close')
// -------------------->
// --------------------> /POPAP VARIABLES
// -------------------->
// -------------------->
// --------------------> RANGEINPUT VARIABLES
// -------------------->
// const rangeBackground = document.querySelector('.range-background')
// const rangeInput = document.getElementById('range')
// const rangeCount = document.querySelector('.range-num')
// const rangeCircle = document.querySelector('.range-circle')
// -------------------->
// --------------------> /RANGEINPUT BAR VARIABLES
// -------------------->
// -------------------->
// --------------------> SELECTIMITATION BAR VARIABLES
// -------------------->
// const arrow = document.querySelectorAll('.arrow-area')
// -------------------->
// --------------------> SELECTIMITATION BAR VARIABLES
// -------------------->

const documentHeight = document.documentElement.clientHeight
const header = document.querySelector('.header')
const videoPopap = document.getElementById('video-popap')
const videoButton = document.getElementById('video-button')
const mapBlockLazy = document.querySelector('._load-map')
const detailsSection = document.querySelector('.details')
const formContact = document.getElementById('contact-us-form')

window.addEventListener('scroll', scrollFunc)
function scrollFunc() {
   if (detailsSection) {
      windowScroll()
   }
   if (header) {
      if (pageYOffset >= 100) {
         header.classList.add('_bg')
      } else {
         header.classList.remove('_bg')
      }
   }
   if (mapBlockLazy) {
      if (!mapBlockLazy.classList.contains('loaded')) {
         mapLazyLoad(mapBlockLazy)
      }
   }
}

//Details


// window.addEventListener('scroll', windowScroll)
// requestAnimationFrame(windowScroll)
function windowScroll() {
   const detailsSectionBounding = detailsSection.getBoundingClientRect().top + pageYOffset
   if (pageYOffset > detailsSectionBounding - documentHeight - 100) {
      if (detailsSection.classList.contains('anim')) {
         setTimeout(() => {
            progressBar(1, 80, 'progressDesign', 'countDesign')
            setTimeout(() => {
               progressBar(1, 70, 'progressMeasurments', 'countMeasurments')
               setTimeout(() => {
                  progressBar(1, 75, 'progressFurniture', 'countFurniture')
                  setTimeout(() => {
                     progressBar(1, 40, 'progressInterior', 'countInterior')
                  }, 1000);
               }, 1000);
            }, 1000);
         }, 1000);
         detailsSection.classList.remove('anim')
      }
   }
}
function progressBar(time, progress, elem, span) {
   start = 0;
   var time = Math.round(time * 1000 / 100)
   let progressBar = document.getElementById(elem)
   let percent = document.getElementById(span)
   let intervalElement = setInterval(function () {
      if (start > progress) {
         clearInterval(intervalElement)
      } else {
         progressBar.value = start
         percent.textContent = start + '%';
         start++
      }
   }, time)
}
let imgNoneCover = document.querySelectorAll('.none-cover')
imgNoneCover.forEach(current => current.style.objectFit = 'none')
// /Details




if (window.innerWidth <= 850) {
   let linkNav = document.querySelectorAll('.header_link')
   linkNav.forEach(current => current.style.margin = `20px 0`)
   burger.addEventListener('click', showBurger)
   function showBurger() {
      this.parentElement.classList.toggle('_show')
      body.classList.toggle('_lock')
   }
}



const swiperSlideHeight = document.querySelectorAll('.swiper-slide')
swiperSlideHeight.forEach(current => {
   current.style.height = 'auto';
   current.style.minHeight = '100%';
})
new Swiper('.swiper-container', {

   //Стрелки
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev'
   // },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 1,
      },
      992: {
         slidesPerView: 1,
      }
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,

      //    // Динамические буллеты
      //    dynamicBullets: true,

      //    //Кастомные буллеты
      //    renderBullet: function (index, className) {
      //       return '<span class="' + className + '">' + (index + 1) + '</span>'
      //    },
      //    // Фракции
      //    type: 'fraction',
      //    renderFraction: function (currentClass, totalClass) {
      //       return 'Foto <span class="' + currentClass + '"></span>' +
      //          ' of ' +
      //          '<span class="' + totalClass + '"></span>';
      //    },
      //    type: 'progressbar',
   },


   // Scrollbar

   // scrollbar: {
   //    el: '.swiper-scrollbar',
   //    draggable: true,
   // },

   // Перетаскивание слайдов на пк: вкл\вкл
   // simulateTouch: true,
   // //Чувствительность свайпа
   // touchRadio: 45,
   // //Угол срабатывания свайпа\перетаскивания
   // touchAngle: 100,
   // //Курсор перетаскивания 
   // grabCursor: true,
   // // Переключение на слайд при клике на него
   // slideToClickedSlide: false,

   // //Навигация по хэшу

   // hashNavigation: {
   //    //отслеживать состояние
   //    watchState: true,
   // },

   // //Управление слайдером с помощью клавиатуры
   // keyboard: {
   //    // вкл/выкл этой возможности
   //    enabled: true,
   //    // вкл/выкл только тогда, когда мы проскролили до слайдера
   //    onlyInViewport: true,
   //    // управление клавишами
   //    pageUpDown: true,

   // },

   // //Управление слайдером с помощью колеса мышки
   // mouseWheel: {
   //    sensitive: 1,
   //    //Чувствительность мышки
   //    //Класс объекта, на котором будет срабатывать прокрутка мышью
   //    // eventsTarget: ".image-slider",
   // },

   // //Автовысота
   // autoHeight: true,

   //Количество слайдов для показа
   slidesPerView: 1, // or 'auto'

   // //Отключение всех видимых пользовательских интрументов управления

   // watchOverflow: true,

   // // Отступы слайдер 
   // spaceBetween: 20,

   // // Определеяет, сколько слайдов будет прокручиваться сразу
   // slidesPerGroup: 1,
   // // //Активный слайд по центру
   // // centeredSlides: true,

   // //Стартовый слайд
   // initialSlide: 0,
   // // //мультирядность
   // slidesPerColumn: 1,
   // //Бесконечность
   loop: true,
   // //Количество дублирующих слайдов
   // loopedSlides: 0,

   // // Свободный режим
   // freeMode: false,

   // //Автопрокрутка
   // autoplay: {
   //    // пауза между прокруткой
   //    delay: 1000,
   //    // закончить на последнем слайде
   //    stopOnLastSlide: true,
   //    // отключить после ручного переключения
   //    disableOnInteraction: true,

   // },


   // //Скорость листания слайдов
   // speed: 800,

   // //Вертикальный слайдер

   // direction: 'horizontal', //'vertical',

   // //Эффекты переключение слайдов
   // //Листание
   // effect: 'slide',

   // effect: 'fade',
   // fadeEffect: {
   //    // Паралелльная смена прозрачности
   //    crossFade: true,
   // },

   // effect: 'flip',

   // flipEffect: {
   //    slideShows: true,
   //    // Показ только активного слайда
   //    limitRotation: true,
   // },


   // effect: 'cube',

   // cubeEffect: {
   //    slideShadows: true,
   //    shadow: true,
   //    shadowOffset: 20,
   //    shadowScale: 0.94,
   // },


   // effect: 'coverflow',

   // coverFlowEffect: {
   //    //угол
   //    stretch: 20,
   //    // наложение
   //    stretch: 50,
   //    // тень
   //    slideShadows: true,
   // },


   // //Брэйк-поинты

   // breakpoints: {
   //    320: {
   //       slidesPerView: 1,
   //    },
   //    480: {
   //       slidesPerView: 2,
   //    },
   //    992: {
   //       slidesPerView: 3,
   //    }
   // },

   // //Отключить предзагрузку картинок
   // preloadImages: false,
   // // Lazy Loading
   // // подгрузка картинок
   // lazy: {
   //    //подгружать на старте
   //    //переключение слайда
   //    loadOntransitionStart: false,
   //    //подгрузить предыдущую и следующую картинки
   //    loadPrevNext: false,
   // },
   // //Слежка за видимыми слайдами
   // watchSlidesProgress: true,
   // //Добавление класса видимым слайдам
   // watchSlidesVisibility: true,

   // //Zoom

   // zoom: {
   //    //Максимальное увеличение
   //    maxRatio: 5,
   //    //Минимальнео увеличение
   //    minRatio: 1,
   // },
   // // Миниатюры превью
   // thumbs: {
   //    //Свайпер с миниатюрами и его настройки
   //    swiper: {
   //       el: ".image-mini-slider",
   //       slidesPerView: 5,

   //    }
   // },

});


// const slider = new Swiper('.image-in-slider', {

//    //Курсор перетаскивания 
//    grabCursor: true,


//    pagination: {
//       el: '.swiper-pagination',
//       clickable: true,

//       dynamicBullets: true,
//    },

//    //корректная работа
//    //перетаскивание слайда
//    //для дочернего слайда
//    nested: true,

// });

// Init more sliders

const swiperSecond = new Swiper('.slider-blog', {
   wrapperClass: "slider__wrapper", // YOUR WRAPPERCLASS
   slideClass: "slider-blog-slide", // YOUR SLIDERCLASS
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next.next-arrow', // 
      prevEl: '.swiper-button-prev.prev-arrow'
   },

   // slidesPerView: 6,
   // spaceBetween: 10,
   slidesPerGroup: 1,
   watchOverflow: false,
   speed: 800,

   // breakpoints: {
   //    320: {
   //       slidesPerView: 2,
   //    },
   //    440: {
   //       slidesPerView: 3,
   //    },
   //    650: {
   //       slidesPerView: 4,
   //    },
   //    768: {
   //       slidesPerView: 5,
   //    },
   //    900: {
   //       slidesPerView: 6,
   //    }
   // },
});
if (videoPopap) {
   videoButton.addEventListener('click', function () {
      videoPopap.querySelector('video').play()
      videoPopap.classList.add('show')
      body.classList.add('_lock')
      videoPopap.addEventListener('click', function () {
         videoPopap.querySelector('video').pause()
         videoPopap.classList.remove('show')
         body.classList.remove('_lock')
      })
   })
}
//LazyLoad
function mapLazyLoad(map) {
   const mapSectionPosition = map.getBoundingClientRect().top + pageYOffset
   const dataMap = map.dataset.map
   if (dataMap) {
      if (pageYOffset > mapSectionPosition - documentHeight) {
         mapBlockLazy.insertAdjacentHTML(
            'beforeend',
            `<iframe src="${dataMap}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
         )
      }
   }
   map.classList.add('loaded')
}
// /LazyLoad
document.addEventListener('DOMContentLoaded', function () {
   if (formContact) {
      sendForm(formContact)
   }
   async function sendForm(form) {
      form.addEventListener('submit', function (event) {
         event.preventDefault()
         let error = formValidate()
      })
   }
   function formValidate() {
      let error = 0;
      let requireInput = document.querySelectorAll('._req')
      requireInput.forEach(function (input) {
         removeError(input)
         // console.log(input.value)
         if (input.classList.contains('_email')) {
            if (!emailValid(input)) {
               addError(input)
               error++
            }
         } else if (input.value === '') {
            addError(input)
            error++
         }
      })
      return error
   }
   function emailValid(emailInput) {
      let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(emailInput.value)
   }
   function removeError(input) {
      input.classList.remove('error')
   }
   function addError(input) {
      input.classList.add('error')
   }
})