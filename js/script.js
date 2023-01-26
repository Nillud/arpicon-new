const expirienceSections = document.querySelectorAll('.experience__section');

const experienceListUpdates = document.querySelector('.experience__list--updates');
const experienceListArticles = document.querySelector('.experience__list--articles');
const experienceListReviews = document.querySelector('.experience__list--reviews');

const closeExperience = () => {
  expirienceSections.forEach((section) => {
    section.classList.remove('experience__section--active');
  });
};

const chooseExperienceSection = () => {
  closeExperience();
  section.classList.toggle('experience__section--active');

  switch (true) {
    case (section.classList.contains('experience__section--updates')) :
      experienceListUpdates.classList.remove('experience__list--not-active');
      experienceListArticles.classList.add('experience__list--not-active');
      experienceListReviews.classList.add('experience__list--not-active');
      break;
    case (section.classList.contains('experience__section--articles')) :
      experienceListArticles.classList.remove('experience__list--not-active');
      experienceListUpdates.classList.add('experience__list--not-active');
      experienceListReviews.classList.add('experience__list--not-active');
      break;
    case (section.classList.contains('experience__section--reviews')) :
      experienceListReviews.classList.remove('experience__list--not-active');
      experienceListArticles.classList.add('experience__list--not-active');
      experienceListUpdates.classList.add('experience__list--not-active');
      break;
    default:
      experienceListArticles.classList.remove('experience__list--not-active');
      experienceListReviews.classList.remove('experience__list--not-active');
      experienceListUpdates.classList.remove('experience__list--not-active');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  expirienceSections.forEach((section) => {
    section.addEventListener('click', chooseExperienceSection);
  });
});


