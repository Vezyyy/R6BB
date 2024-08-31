document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const cookiesConsent = document.getElementById('cookies-consent');
    const acceptCookies = document.getElementById('accept-cookies');
    const scrollTopButton = document.querySelector('.scroll-to-top');
    const infoPopup = document.getElementById('info-popup');
    const closePopup = document.getElementById('close-popup');

    // Hide preloader once the page is fully loaded
    window.addEventListener('load', function () {
        document.getElementById('preloader').classList.add('hidden');
    });

    // Handle cookies consent
    if (!localStorage.getItem('cookiesAccepted')) {
        cookiesConsent.style.display = 'flex';
    }

    if (acceptCookies) {
        acceptCookies.addEventListener('click', function () {
            localStorage.setItem('cookiesAccepted', 'true');
            cookiesConsent.style.display = 'none';
        });
    }

    // Handle mobile navigation toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    }

    // Smooth scroll to section and close menu on mobile
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close menu on mobile
                if (window.innerWidth <= 768 && navMenu) {
                    navMenu.classList.remove('show');
                }
            }
        });
    });

    // Scroll to top button functionality
    if (scrollTopButton) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                scrollTopButton.classList.add('show');
            } else {
                scrollTopButton.classList.remove('show');
            }
        });
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function randomizeOperators() {
    alert("Randomizer functionality coming soon!");
}

document.addEventListener('DOMContentLoaded', function () {
    const infoPopup = document.getElementById('info-popup');
    const closePopup = document.getElementById('close-popup');

    // Show the info popup after a delay
    window.addEventListener('load', function () {
        setTimeout(function() {
            if (!localStorage.getItem('popupShown')) {
                if (infoPopup) {
                    infoPopup.style.display = 'flex';
                    localStorage.setItem('popupShown', 'true');
                }
            }
        }, 1000); // Delay in milliseconds
    });

    // Close popup functionality
    if (closePopup) {
        closePopup.addEventListener('click', function () {
            if (infoPopup) {
                infoPopup.style.display = 'none';
            }
        });
    }
});


