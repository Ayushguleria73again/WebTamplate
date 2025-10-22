// Image slider functionality
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const slideCount = slides.length;

function goToSlide(index) {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    
    currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Next/previous buttons
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
}

// Dot navigation
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-index'));
        goToSlide(slideIndex);
    });
});

// Auto-advance slides
let slideInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
}, 5000);

// Pause on hover
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    });

    // Mobile-friendly touch events
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(slideInterval);
    }, {passive: true});
    
    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    }, {passive: true});
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - next slide
            goToSlide(currentSlide + 1);
        }
        
        if (touchEndX > touchStartX + 50) {
            // Swipe right - previous slide
            goToSlide(currentSlide - 1);
        }
    }
}
