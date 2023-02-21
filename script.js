const sectionMenu = document.querySelectorAll('.section-menu');
const sectionHead = document.querySelectorAll('h2');

window.onload = () => {
  for (const h2 of sectionHead) {
    h2.addEventListener('click', () => {
      const next = h2.nextElementSibling.style;
      if (next.display === '') {
        next.display = 'flex';
        h2.nextElementSibling.classList.add('show');
      } else {
        next.display = '';
      }
    })
  }
}