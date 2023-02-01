// import { paginator } from './parse-liftinform';

const experienceSections = document.querySelectorAll('.experience__section');
const experienceList = document.querySelectorAll('.experience__list');

const sliderMonth = document.querySelector('#month');
const sliderYear = document.querySelector('#year');

const prices = document.querySelectorAll('.price-value');

const functionSections = document.querySelectorAll('.functions__item');
const functionImage = document.querySelector('.functions__image');

const pircesValuesMonth = {
  20: 20,
  15: 15,
  10: 10,
  8: 8
};

const pircesValuesYear = {
  20: 15,
  15: 11.25,
  10: 7.5,
  8: 6
};

const functionImageUrls = {
  'suggest': 'img/functions/1.png',
  'functions': 'img/functions/2.jpg',
  'more-functions': 'img/functions/3.png',
  'analitic': 'img/functions/4.png'
}

const closeExperienceSections = () => {
  experienceSections.forEach((section) => {
    section.classList.remove('experience__section--active');
  });
};

const closeFunctionSections = () => {
  functionSections.forEach((section) => {
    section.classList.remove('functions__item--active');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // paginator();
  experienceSections.forEach((section) => {
    section.addEventListener('click', () => {
      closeExperienceSections();
      section.classList.add('experience__section--active');

      experienceList.forEach((list) => {
        if (list.dataset.category !== section.dataset.type && section.dataset.type !== 'all') {
          list.classList.add('experience__list--not-active');
        } else {
          list.classList.remove('experience__list--not-active');
        }
      });
    });
  });

  functionSections.forEach((section) => {
    section.addEventListener('click', () => {
      closeFunctionSections();
      section.classList.add('functions__item--active');
      functionImage.src = functionImageUrls[section.dataset.function];
    });
  });

  sliderMonth.addEventListener('click', () => {
    prices.forEach((price) => {
      price.textContent = pircesValuesMonth[price.dataset.price];
    });
  });

  sliderYear.addEventListener('click', () => {
    prices.forEach((price) => {
      price.textContent = pircesValuesYear[price.dataset.price];
    });
  });
});
