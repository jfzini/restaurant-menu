const sectionMenu = document.querySelectorAll('.section-menu');
const arrows = document.querySelectorAll('.arrow-icon');
const sectionNames = document.querySelectorAll('.section-name');

window.onload = () => {
  for (const section of sectionNames) {
    section.addEventListener('click', () => {
      const next = section.nextElementSibling.style;
      if (next.display === '') {
        next.display = 'flex';
        section.nextElementSibling.classList.add('show');
        section.lastElementChild.src = 'img/up-arrows.png';
      } else {
        next.display = '';
        section.lastElementChild.src = 'img/down-arrows.png';
      }
    })
  }
}