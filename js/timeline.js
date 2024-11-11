document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.main-post');
  const mainProgressBar = document.querySelector(".progress-bar--primary .progress-bar__fill");
  const leftArrow = document.querySelector('.carousel-arrow--left');
  const rightArrow = document.querySelector('.carousel-arrow--right');

  let currentIndex = 0;
  let progress = 0;
  let autoScrollInterval, progressInterval;

  const slideDuration = 5000; // Time for each slide (in milliseconds)
  const progressUpdateInterval = 100; // Progress bar update frequency (in milliseconds)

  // Function to show the next slide
  function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlidePosition();
      resetProgress();
  }

  // Function to show the previous slide
  function showPrevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
      resetProgress();
  }

  // Function to update the slide position
  function updateSlidePosition() {
      const offset = -currentIndex * 100; // Each slide takes 100% width
      slidesContainer.style.transition = 'transform 0.5s ease'; // Smooth transition
      slidesContainer.style.transform = `translateX(${offset}%)`;
  }

  // Function to reset the progress bar for each slide
  function resetProgress() {
      // Clear the previous progress interval
      if (progressInterval) {
          clearInterval(progressInterval);
      }

      // Reset progress to 0
      progress = 0;

      // Update the progress bar's width
      if (mainProgressBar) {
          mainProgressBar.style.width = `${progress}%`;
      }

      // Set a new interval to update progress every `progressUpdateInterval`
      progressInterval = setInterval(updateProgress, progressUpdateInterval);
  }

  // Function to update the progress bar
  function updateProgress() {
      const progressIncrement = (100 / (slideDuration / progressUpdateInterval)); // Calculate progress increment based on time
      if (progress >= 100) {
          showNextSlide(); // Automatically move to the next slide when progress reaches 100%
      } else {
          progress += progressIncrement;
          if (mainProgressBar) {
              mainProgressBar.style.width = `${progress}%`;
          }
      }
  }

  // Initialize auto-scroll and progress bar
  function startCarousel() {
      // Clear any existing intervals
      clearInterval(autoScrollInterval);
      clearInterval(progressInterval);

      // Set auto-scroll interval for each slide
      autoScrollInterval = setInterval(showNextSlide, slideDuration);
      resetProgress();
  }

  // Stop the carousel on hover
  if (slidesContainer) {
      slidesContainer.addEventListener('mouseenter', () => {
          clearInterval(autoScrollInterval);
          clearInterval(progressInterval);
      });

      // Resume the carousel on mouse leave
      slidesContainer.addEventListener('mouseleave', startCarousel);
  }

  // Arrow event listeners for manual control
  if (leftArrow) {
      leftArrow.addEventListener('click', showPrevSlide);
  }
  if (rightArrow) {
      rightArrow.addEventListener('click', showNextSlide);
  }

  // Start the carousel when the page loads
  startCarousel();
});
