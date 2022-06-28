/* Slick slider */
/* $('.carousel__inner').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow_left.png"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow_right.png"></button>',
  fade: true,
  dots: true,
  dotsClass: 'slick-dots',
});

const dotsConitainer = document.querySelector('.slick-dots');
const dots = dotsConitainer.querySelectorAll('button');

dots.forEach(item => item.innerHTML = ''); */

  const slider = tns ({
    container: '.carousel__inner',
    mode: 'gallery',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    nav: false,
    autoHeight: true,
  });

  document.querySelector('.tiny-controls_next').addEventListener('click', function() {
    slider.goTo('next');
  });

  document.querySelector('.tiny-controls_prev').addEventListener('click', function() {
    slider.goTo('prev');
  });

const catalogNavsParent = document.querySelector('.catalog-tabs'), 
catalogNav = catalogNavsParent.querySelectorAll('.catalog-tabs__item'),
catalogNavBtn = document.querySelectorAll('.catalog-tabs__item-btn'),
catalogCards = document.querySelectorAll('.catalog-cards');

const catalogLinkOpen = document.querySelectorAll('.catalog__link_open'),
catalogLinkClose = document.querySelectorAll('.catalog__link_close'),
catalogContent = document.querySelectorAll('.catalog-item__content'),
catalogList = document.querySelectorAll('.catalog-item__list');


addEventListener('DOMContentLoaded', () => {
  
  function showTabContent(i = 0) {
    catalogNav[i].classList.add('catalog-tabs_active');
    catalogCards[i].classList.add('catalog-cards_active');
  }

  function hideTabContent() {
    catalogNav.forEach(item => {
      item.classList.remove('catalog-tabs_active');
      console.log('remove-1');
    });
    catalogCards.forEach(item => {
      item.classList.remove('catalog-cards_active');
      console.log('remove-2');
    });
  }
  hideTabContent();
  showTabContent();

  catalogNavsParent.addEventListener('click', event => {
    if (event.target && event.target.classList.contains('catalog-tabs__item-btn')) {
      catalogNavBtn.forEach((item, i) => {
        if (event.target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});

const reviewBlock = document.querySelector('.review-wrapper');

class Review {
  constructor(img, name, span, review) {
    this.img = img;
    this.name = name;
    this.span = span;
    this.review = review;
  }
  appendRev() {
    return `
    <div class="review-item">
    <div class="review-item__avatar">
    <img src="${this.img}" alt="avatar">
    </div>
    <div class="review-item__text">
      <div class="review-item__text-title">
        ${this.name} 
      </div>
      <div class="review-item__text-subtitle">
        ${this.span}
      </div>
      <p class="review-item__text-descr">
        ${this.review}
      </p>
    </div>
  </div>`;
  }
}

const firstReview = new Review ('img/avatar/photo_1.png', 'Ирина Иванченко', '2 полумарафона', 'Не знала, что себе купить - обратилась к ребятам из RunSmart - подобрали пульсометр, который подошёл именно под мои цели и финансовые возможности.Через некоторое время решила обновить гаджет - не раздумывая обратилась туда же. Новые цели - новый гаджет! Спасибо, RunSmart! ');
const secondReview = new Review ('img/avatar/photo_2.png', 'Иван Сёмочкин', '1 полумарафон', 'Крутая штука-пульсометр. Обычно без них бегал. Оказывается только хуже себе делал. Купил пульсометр, ещё в подарок получил тренировку. Со мной вместе провели первую тренировку, научили пользоваться новым гаджетом. Также объяснили основы анатомии, составили план тренировок на месяц вперёд.С ними подготовился к своему первому полумарафону! Спасибо!!!');
const thirdReview = new Review ('img/avatar/photo_3.png', 'Юлия Дашкина', '2 полумарафона', 'Долго не могла начать бегать, т.к. до этого несколько раз начинала, но становилось тяжело и я бросала. От друзей услышала о RunSmart и о беге с контролем пульса и решила попробовать. Позвонила, ребята поинтересовались моими целями и подобрали очень интересный вариант со скидкой! Теперь бегаю и наслаждаюсь бегом! Пробежала уже 2 полумарафона и несколько более коротких забегов и не намерена останавливаться! Спасибо!!!');

document.querySelector('.review-wrapper').innerHTML = `
${firstReview.appendRev()}
${secondReview.appendRev()}
${thirdReview.appendRev()}
`;

catalogLinkOpen.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target) {
      catalogContent[i].classList.remove('catalog-item__content_active');
      catalogList[i].classList.add('catalog-item__list_active');
    }
  });
});

catalogLinkClose.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target) {
      catalogContent[i].classList.add('catalog-item__content_active');
      catalogList[i].classList.remove('catalog-item__list_active');
    }
  });
});

$('[data-modal="consultation"]').on('click', function(){
  $('.overlay, #consultation').fadeIn();
});

$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #order, #thank').fadeOut();
});

$('.button_mini').on('click', function(){
  $('.overlay, #order').fadeIn();
});