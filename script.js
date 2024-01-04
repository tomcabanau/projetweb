function navigateToCarPage(carId) {
    var carWidget = document.querySelector(`.car-widget[data-car-id="${carId}"]`);
    var link = carWidget.getAttribute('data-link');
    window.location.href = link;
}

function searchCar() {
    var searchTerm = document.getElementById('searchInput').value;
    search(searchTerm);
}

function search(searchTerm) {
    var searchTermLowerCase = searchTerm.toLowerCase();
    var matchingWidgets = document.querySelectorAll('.car-widget[data-car-id*="' + searchTermLowerCase + '"]');
    if (matchingWidgets.length > 0) {
        var firstMatchingWidget = matchingWidgets[0];
        highlightAndNavigate(firstMatchingWidget);
    } else {
        alert("Aucun résultat trouvé pour la recherche : " + searchTerm);
    }
}

function highlightAndNavigate(carWidget) {
    carWidget.classList.add('highlighted-widget');
    setTimeout(function() {
        carWidget.classList.remove('highlighted-widget');
    }, 4000);

    carWidget.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        speed: 600,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // Configuration des particules
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "top",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                },
                onclick: {
                    enable: false,
                },
                resize: true
            },
        },
        retina_detect: true
    });
    document.getElementById('particles-js-container').classList.add('bottom-start');
});
