const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text-1': 'Save sincere emotions, romantic feelings and',
      'hero-text-2': 'happy moments of life together with professional',
      'hero-text-3': 'photographer Alexa Rise',
      'hire': 'Hire me',
      'hero-text-1-tablet': 'Save sincere emotions, romantic feelings',
      'hero-text-2-tablet': 'and happy moments of life together with',
      'hero-text-3-tablet': 'professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skills': 'Skills',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'portfolio': 'Portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price': 'Price',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'order': 'Order shooting',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'order': 'Order shooting',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text-1': 'Сохраните искренние эмоции, романтические переживания и ',
      'hero-text-2': 'счастливые моменты жизни вместе с профессиональным ',
      'hero-text-3': ' фотографом Алексой Райс',
      'hero-text-1-tablet': 'Сохраните искренние эмоции, романтические переживания ',
      'hero-text-2-tablet': 'и счастливые моменты жизни вместе с ',
      'hero-text-3-tablet': 'профессиональным фотографом Алексой Райс',
      'hire': 'Пригласить',
      'skills': 'Навыки',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'portfolio': 'Портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'video': 'Видео',
      'price': 'Цены',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'order': 'Заказать съемку',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'order': 'Заказать съемку',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
}
let ruBtn = document.querySelector('.header-language__item-ru');
let enBtn = document.querySelector('.header-language__item-en');
let wordList = document.querySelectorAll('[data-i18]');
let valuesI18Obj = Object.values(i18Obj)

ruBtn.addEventListener('click', function() {
  for(let i = 0; i < wordList.length; i++) {
    if(wordList[i].dataset.i18 in valuesI18Obj[1]) {
      wordList[i].textContent = Object.values(valuesI18Obj[1])[i]
      console.log(wordList[i].textContent)
    }
  }
});
enBtn.addEventListener('click', function() {
  for(let i = 0; i < wordList.length; i++) {
    if(wordList[i].dataset.i18 in valuesI18Obj[0]) {
      wordList[i].textContent = Object.values(valuesI18Obj[0])[i]
      console.log(wordList[i].textContent)
    }
  }
});

const button = document.querySelector('.humb-field');
const popup = document.querySelector('.popup');
const navBar = document.querySelector('.nav-list').cloneNode(1);
const body = document.body;

button.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    body.classList.toggle('noscroll');
    button.classList.toggle('active');
    renderPopup();
});

function renderPopup() {
    popup.appendChild(navBar);
}

const lightBtn = document.querySelector('.header-sun');
const footer = document.querySelector('.footer');
const main = document.querySelector('main');

lightBtn.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('light');
    footer.classList.toggle('black');
    lightBtn.classList.toggle('light');
    main.classList.toggle('light');
})
