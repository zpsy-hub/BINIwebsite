document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;

    // Select all the left items (text descriptions) and right items (images)
    const leftItems = document.querySelectorAll(".left-item");
    const rightItems = document.querySelectorAll(".item");
    const totalItems = leftItems.length;

    // Select the arrow buttons
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    // Select member links for quick navigation
    const memberLinks = document.querySelectorAll(".member-links a");

    // Ensure the first profile is visible on load
    leftItems[0].classList.add("active");
    rightItems[0].classList.add("active");

    // Scroll animation using IntersectionObserver for smooth fade-in (for mobile)
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        { threshold: 0.2 }
    );

    // Observe each profile for scroll animation
    leftItems.forEach((profile) => observer.observe(profile));
    rightItems.forEach((profile) => observer.observe(profile));

    // Function to add entry animations
    function addEntryAnimations(index) {
        leftItems[index].classList.add("slide-in-left", "fade-in");
        rightItems[index].classList.add("scale-in", "fade-in");
    }

    // Function to remove animations after they finish to reset
    function removeAnimations(index) {
        leftItems[index].classList.remove("slide-in-left", "fade-in");
        rightItems[index].classList.remove("scale-in", "fade-in");
    }

    // Function to update active slide with animations
    function updateActiveSlide(index) {
        // Remove active class and animations from all items
        leftItems.forEach((item, i) => {
            item.classList.remove("active");
            removeAnimations(i);
        });
        rightItems.forEach((item, i) => {
            item.classList.remove("active");
            removeAnimations(i);
        });

        // Add active class and entry animations to current items
        leftItems[index].classList.add("active");
        rightItems[index].classList.add("active");
        addEntryAnimations(index);
    }

    // Function to go to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateActiveSlide(currentIndex);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateActiveSlide(currentIndex);
    }

    // Event listeners for arrow buttons
    leftArrow.addEventListener("click", prevSlide);
    rightArrow.addEventListener("click", nextSlide);

    // Event listeners for member links
    memberLinks.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            currentIndex = index;
            updateActiveSlide(currentIndex);
        });
    });
});
