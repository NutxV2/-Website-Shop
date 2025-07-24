  window.addEventListener('scroll', function () {
    const arrow = document.querySelector('.scroll-arrow');
    const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 1;

    arrow.style.opacity = scrollBottom ? '0' : '0.7';
    arrow.style.pointerEvents = scrollBottom ? 'none' : 'auto';
  });