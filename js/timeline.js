const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.main-post');
const mainProgressBar = document.querySelector(".progress-bar--primary .progress-bar__fill");
const leftArrow = document.querySelector('.carousel-arrow--left');
const rightArrow = document.querySelector('.carousel-arrow--right');

let currentIndex = 0;
let progress = 0;
let interval, progressInterval;

// Function to show the next slide
function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide after the last one
  updateSlidePosition();
  resetProgress();
}

// Function to show the previous slide
function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to last slide if at the beginning
  updateSlidePosition();
  resetProgress();
}

// Function to update the slide position
function updateSlidePosition() {
  const offset = -currentIndex * 100; // Each slide takes 100% width
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Function to reset the progress bar for each slide
function resetProgress() {
  // Clear the previous interval if it exists
  if (progressInterval) {
    clearInterval(progressInterval);
  }
  
  // Reset progress to 0
  progress = 0;

  // Update the progress bar's width
  mainProgressBar.style.width = `${progress}%`;

  // Set a new interval to update progress every 100ms (adjust as needed)
  progressInterval = setInterval(updateProgress, 100); // Update progress every 100ms
}

// Function to update the progress bar
function updateProgress() {
  if (progress >= 100) {
    showNextSlide();
  } else {
    progress += 1; // Adjust this value to control speed of the progress bar
    mainProgressBar.style.width = `${progress}%`;
  }
}

// Initialize auto-scroll and progress bar
function startCarousel() {
  interval = setInterval(showNextSlide, 3000); // Change slides every 3 seconds
  resetProgress();
}

// Stop the carousel on hover
slidesContainer.addEventListener('mouseenter', () => {
  clearInterval(interval);
  clearInterval(progressInterval);
});

// Resume the carousel on mouse leave
slidesContainer.addEventListener('mouseleave', startCarousel);

// Arrow event listeners for manual control
leftArrow.addEventListener('click', showPrevSlide);
rightArrow.addEventListener('click', showNextSlide);

// Start the carousel
startCarousel();
