document.addEventListener('DOMContentLoaded', function () {
  const navMenu = document.getElementById('navMenu');
  const menu = document.querySelector('.menu');
  const searchIcon = document.querySelector('.searchIconImage');
  const searchInput = document.querySelector('.search-input');

  navMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
  });

  searchIcon.addEventListener('click', function () {
    searchInput.classList.toggle('open');
    if (searchInput.classList.contains('open')) {
      searchInput.focus();
    } else {
      searchInput.blur();
    }
  });
});
