document.addEventListener('DOMContentLoaded', () => {
    const searchIconImage = document.querySelector('.searchIconImage');
    const searchInput = document.querySelector('.searchInput');

    searchIconImage.addEventListener('click', () => {
        searchInput.classList.toggle('visible');
    });
});
