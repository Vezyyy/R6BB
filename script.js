document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const cookiesConsent = document.getElementById('cookies-consent');
    const acceptCookies = document.getElementById('accept-cookies');

    // Handle cookies consent
    if (!localStorage.getItem('cookiesAccepted')) {
        cookiesConsent.style.display = 'flex';
    }

    acceptCookies.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookiesConsent.style.display = 'none';
    });

    // Handle mobile navigation toggle
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    // Smooth scroll to section and close menu on mobile
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close menu on mobile
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('show');
            }
        });
    });

    // Scroll to top button functionality
    window.addEventListener('scroll', function () {
        const scrollTopButton = document.querySelector('.scroll-to-top');
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'flex';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    // Hide preloader once the page is fully loaded
    window.addEventListener('load', function () {
        document.getElementById('preloader').style.display = 'none';
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function randomizeOperators() {
    alert("Randomizer functionality coming soon!");
}
