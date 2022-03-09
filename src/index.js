const btnMenu = document.getElementById('menuBtn');
const header = document.querySelector('header');

window.addEventListener('resize', (ev) => {
  if (window.outerWidth > 815) {
    if (header.classList.contains('activeMenu')) {
      header.classList.remove('activeMenu');
    }
  }
});
btnMenu.addEventListener('click', () => {
  if (header.classList.contains('activeMenu')) {
    header.classList.remove('activeMenu');
  } else {
    header.classList.add('activeMenu');
  }
});
