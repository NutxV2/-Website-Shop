window.addEventListener('scroll', function () {
    const container = document.querySelector('.container');
    if (window.scrollY > 40) {
        container.classList.add('shrink');
    } else {
        container.classList.remove('shrink');
    }
});