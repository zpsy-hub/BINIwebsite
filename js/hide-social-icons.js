window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    const socialIcons = document.querySelector('.social-icons');

    if (window.scrollY > heroSection.clientHeight) {
        socialIcons.classList.add('hide-on-scroll');
    } else {
        socialIcons.classList.remove('hide-on-scroll');
    }
});
