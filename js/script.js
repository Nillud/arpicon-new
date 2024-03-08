// import { paginator } from './parse-liftinform';

// const experienceSections = document.querySelectorAll('.experience__section');
// const experienceList = document.querySelectorAll('.experience__list');

const sliderMonth = document.querySelector('#month');
const sliderYear = document.querySelector('#year');

const prices = document.querySelectorAll('.price-value');

const pircesValuesMonth = {
    25: 25,
    20: 20,
    15: 15,
    10: 10
};

const pircesValuesYear = {
    25: 18,
    20: 15,
    15: 12,
    10: 6
};

// const closeExperienceSections = () => {
//   experienceSections.forEach((section) => {
//     section.classList.remove('experience__section--active');
//   });
// };


window.addEventListener('DOMContentLoaded', () => {
    // paginator();
    // experienceSections.forEach((section) => {
    //   section.addEventListener('click', () => {
    //     closeExperienceSections();
    //     section.classList.add('experience__section--active');

    //     experienceList.forEach((list) => {
    //       if (list.dataset.category !== section.dataset.type && section.dataset.type !== 'all') {
    //         list.classList.add('experience__list--not-active');
    //       } else {
    //         list.classList.remove('experience__list--not-active');
    //       }
    //     });
    //   });
    // });

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