function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

function checkVisibility() {
    const serviceBoxes = document.querySelectorAll('.service-website');
    serviceBoxes.forEach(serviceBox => {
        if (isInViewport(serviceBox)) {
            serviceBox.classList.add('visible');
        } else {
            serviceBox.classList.remove('visible'); // ถ้าหายไปให้ skew กลับ
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
