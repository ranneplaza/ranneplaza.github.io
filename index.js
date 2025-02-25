let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let autoSlideInterval;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = "none"; // Hide all slides
        if (i === index) {
            slide.style.display = "block"; // Show the active slide
        }
    });
}

// Function to change slide (manual and automatic)
function changeSlide(step) {
    slideIndex += step;

    if (slideIndex >= slides.length) {
        slideIndex = 0; // Loop back to first slide
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Loop back to last slide
    }

    showSlide(slideIndex);
}

// Automatic slideshow functionality
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1); // Automatically move to the next slide
    }, 3000); // Change slide every 3 seconds
}

// Stop the automatic slideshow on manual navigation
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners for manual navigation
document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
    stopAutoSlide(); // Stop auto-sliding on manual control
});

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
    stopAutoSlide(); // Stop auto-sliding on manual control
});

// Initialize slideshow
showSlide(slideIndex);
startAutoSlide(); // Start auto-sliding


