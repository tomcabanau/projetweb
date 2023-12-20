function navigateToCarPage(carId) {
    window.location.href = 'car-page.html?id=' + carId;
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

    function searchCar(searchTerm) {
        // Obtenez tous les widgets de voiture
        const carWidgets = document.querySelectorAll('.car-widget');

        // Supprimez la classe de surbrillance des widgets précédemment mis en surbrillance
        carWidgets.forEach(widget => {
            widget.classList.remove('highlighted');
        });

        let foundCar = null;

        // Parcourez chaque widget de voiture pour trouver la correspondance
        carWidgets.forEach(widget => {
            const carId = widget.getAttribute('data-car-id');
            const carName = widget.querySelector('img').alt.toLowerCase();

            // Vérifiez si le terme de recherche correspond au nom de la voiture
            if (carName.includes(searchTerm.toLowerCase())) {
                // Ajoutez la classe pour mettre en surbrillance le widget
                widget.classList.add('highlighted');
                foundCar = widget;
            }
        });

        // Si une voiture correspondante est trouvée, faites défiler la page pour la centrer
        if (foundCar) {
            foundCar.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });

            // Supprimez la classe de surbrillance après 3 secondes (3000 millisecondes)
            setTimeout(function () {
                foundCar.classList.remove('highlighted');
            }, 3000);
        }
    }

    // Appel de la fonction de recherche lors de la saisie dans le champ de recherche
    const rechercheInput = document.querySelector('.recherche-bt input');
    rechercheInput.addEventListener('input', function () {
        searchCar(rechercheInput.value);
    });
});
