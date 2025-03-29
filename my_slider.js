var swiper = new Swiper('.blog-slider', {
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000, // время в миллисекундах
        disableOnInteraction: false, // продолжать автопрокрутку после взаимодействия
    }
});

const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.nav-dot');
let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateCarousel();
    });
});

// Автопрокрутка каждые 5 секунд
setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateCarousel();
}, 5000);