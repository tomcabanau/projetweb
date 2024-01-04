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
});
