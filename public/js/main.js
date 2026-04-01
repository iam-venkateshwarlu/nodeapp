document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileIcon = document.getElementById('mobile-icon');
    const navLinks = document.getElementById('nav-links');

    if (mobileIcon && navLinks) {
        mobileIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // Highlight current nav item
    const currentLocation = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        if(currentLocation.includes(item.getAttribute('href')) && item.getAttribute('href') !== '/') {
            item.classList.add('active');
        } else if (currentLocation === '/' || currentLocation === '/index.html' ) {
            if(item.getAttribute('href') === 'index.html' || item.getAttribute('href') === '/') {
                item.classList.add('active');
            }
        }
    });
});
