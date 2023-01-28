const experienceSections = document.querySelectorAll('.experience__section');
const experienceList = document.querySelectorAll('.experience__list');

const closeExperienceSections = () => {
  experienceSections.forEach((section) => {
    section.classList.remove('experience__section--active');
  });
};

window.addEventListener('DOMContentLoaded', () => {
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
});


