let currentSlide = 0;
const totalSlides = 11; // Total number of brand items

// Initialize slider dots
function initSlider() {
    const dotsContainer = document.getElementById('sliderDots');
    dotsContainer.innerHTML = '';
    
    // Only create dots on mobile
    if (window.innerWidth <= 480) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            dot.onclick = () => goToSlide(i);
            dotsContainer.appendChild(dot);
        }
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function slideMove(direction) {
    // Only work on mobile
    if (window.innerWidth > 480) return;
    
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    updateSliderPosition();
}

function goToSlide(index) {
    // Only work on mobile
    if (window.innerWidth > 480) return;
    
    currentSlide = index;
    updateSliderPosition();
}

function updateSliderPosition() {
    // Only work on mobile
    if (window.innerWidth > 480) return;
    
    const wrapper = document.getElementById('sliderWrapper');
    const slideWidth = 295; // 280px width + 15px gap
    wrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    updateDots();
}

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

const slider = document.getElementById('sliderWrapper');

slider.addEventListener('touchstart', (e) => {
    if (window.innerWidth > 480) return;
    touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
    if (window.innerWidth > 480) return;
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        slideMove(1); // Swipe left
    }
    if (touchEndX > touchStartX + 50) {
        slideMove(-1); // Swipe right
    }
}

// Reinitialize on window resize
window.addEventListener('resize', () => {
    initSlider();
    if (window.innerWidth > 480) {
        // Reset transform when switching to grid view
        const wrapper = document.getElementById('sliderWrapper');
        wrapper.style.transform = 'none';
        currentSlide = 0;
    }
});

// Initialize on page load
window.addEventListener('load', initSlider);

function handleBrandClick(brandName) {
    // Add animation effect
    event.target.style.transform = 'scale(0.9)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
    }, 200);
    
    // You can add navigation or other functionality here
    console.log(`Clicked on ${brandName}`);
    alert(`You clicked on ${brandName}!`);
}

function toggleGrid() {
    const container = document.getElementById('sliderContainer');
    const btn = event.target;
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        btn.textContent = 'Hide';
        btn.style.backgroundColor = 'white';
    } else {
        container.style.display = 'none';
        btn.textContent = 'Show';
        btn.style.backgroundColor = '#f0f0f0';
    }
}