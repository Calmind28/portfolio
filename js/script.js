// =============================================
// =============================================
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  } 
};
// =============================================
if (isMobile.any()) {
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function(e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    } 
  }
}else {
  document.body.classList.add('_pc');
}
// =============================================
// =============================================
const allLangs = ['en', 'ru', ];
let currentLang = localStorage.getItem('language') || 'en';
const langItems = document.querySelectorAll("[data-item]");
const currentPathName = window.location.pathname;
let currentTextObject = {};

// const myImage = new Image(1000, 1000);
// myImage.src = "images/languages/france.svg";
// document.body.appendChild(myImage);
// const myImage1 = new Image(800, 800);
// myImage.src = "images/languages/china.svg";
// document.body.appendChild(myImage1);
const homeTexts = {
  // "menu__link_0": {
  //   en: myImage,
  //   ru: myImage1,
  // },
  "menu__link_1": {
    en: "REVIEWS",
    ru: "ОТЗЫВЫ",
  },
  "menu__link_2": {
    en: "FAQ",
    ru: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
  },
  "menu__link_3": {
    en: "CONTACT US",
    ru: "СВЯЖИСЬ С НАМИ",
  },
  "menu__link_4": {
    en: "En",
    ru: "Ру",
  },
};

function checkPagePathName() {
  switch (currentPathName) {
    case '/index.html':
      currentTextObject = homeTexts;
      break;
    case '/another_page.html':
      currentTextObject = anotherTexts;
      // anotherTexts название ключей для другой страницы
      break;
    default:
      currentTextObject = homeTexts;
      break;
  }
}
checkPagePathName();

function changeLang() {
  for (const key in currentTextObject) {
      const elem = document.querySelector(`[data-lang=${key}]`);
      if(elem) {
        elem.textContent = currentTextObject[key][currentLang];
      }
    }
}
changeLang();

langItems.forEach(item => {
  item.addEventListener('click',(event) => {
    currentLang = event.target.dataset.item;
    localStorage.setItem('language', event.target.dataset.item)
    resetActiveClass(langItems, "menu__item_active");
    item.classList.add("menu__item_activee");
    changeLang();
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

function checkActiveLangButton() {
  switch (currentLang) {
    case 'en':
      document
        .querySelector('[data-item="en"]')
        .classList.add("menu__item-active");
      break;
    case 'ru':
      document
        .querySelector('[data-item="ru"]')
        .classList.add("menu__item-active");
      break;
  
    default:
      document
        .querySelector('[data-item="en"]')
        .classList.add("menu__item-active");
      break;
  }  
}
checkActiveLangButton();

function checkActiveLangItem() {
  switch (currentLang) {
    case 'ru':
      document.querySelector('[data-item="ru"]')
      .classList.add("menu__item-active")
      break;
    case 'en':
      document.querySelector('[data-item="en"]')
      .classList.add("menu__item-active")
      break;

    default:
      document.querySelector('[data-item="en"]')
      .classList.add("menu__item-active")
      break;
  }
}
checkActiveLangItem();
// =============================================
// =============================================

let qa__wrapper = document.querySelectorAll('.qa__wrapper')

qa__wrapper.forEach(el => {
    el.addEventListener('click', () => {

        let span = el.childNodes[3]
        let btn = el.childNodes[2]
        let qa__wrapper = el
        console.log(el.childNodes)

        if (span.style.maxHeight === `0px`) {
            span.style.maxHeight = span.scrollHeight + 'px';
        } else {
            span.style.maxHeight = 0
        }
    })
})



