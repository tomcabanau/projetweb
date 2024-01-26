// Cette fonction prend un identifiant de voiture en paramètre et navigue vers la page de cette voiture.
function navigateToCarPage(carId) {
    // Sélectionne l'élément du widget de voiture correspondant à l'identifiant de la voiture.
    var carWidget = document.querySelector(`.car-widget[data-car-id="${carId}"]`);
    // Récupère l'attribut 'data-link' de l'élément du widget de voiture.
    var link = carWidget.getAttribute('data-link');
    // Redirige la fenêtre vers le lien spécifié.'
    window.location.href = link;
}

// Cette fonction est appelée lorsqu'une recherche de voiture est effectuée.
function searchCar() {
    // Récupère la valeur de l'élément d'entrée de recherche.
    var searchTerm = document.getElementById('searchInput').value;
    // Appelle la fonction de recherche avec le terme de recherche.
    search(searchTerm);
}

// Cette fonction effectue la recherche de voitures correspondant au terme de recherche fourni.
function search(searchTerm) {
    // Convertit le terme de recherche en minuscules pour une correspondance insensible à la casse.
    var searchTermLowerCase = searchTerm.toLowerCase();
    // Sélectionne tous les widgets de voiture dont l'identifiant contient le terme de recherche.
    var matchingWidgets = document.querySelectorAll('.car-widget[data-car-id*="' + searchTermLowerCase + '"]');
    // Si des correspondances sont trouvées, met en surbrillance et navigue vers le premier widget correspondant.
    if (matchingWidgets.length > 0) {
        var firstMatchingWidget = matchingWidgets[0];
        highlightAndNavigate(firstMatchingWidget);
    } else {
        // Sinon, affiche une alerte indiquant qu'aucun résultat n'a été trouvé.
        alert("Aucun résultat trouvé pour la recherche : " + searchTerm);
    }
}

// Cette fonction met en surbrillance et navigue vers un widget de voiture spécifié.
function highlightAndNavigate(carWidget) {
    // Ajoute une classe pour mettre en surbrillance le widget.
    carWidget.classList.add('highlighted-widget');
    // Supprime la classe de surbrillance après 4 secondes.
    setTimeout(function() {
        carWidget.classList.remove('highlighted-widget');
    }, 4000);
    // Fait défiler la page pour amener le widget en vue de manière fluide.
    carWidget.scrollIntoView({ behavior: 'smooth' });
}

// Fonction executée lors de l'utilisation du clic droit.
$(document).bind("contextmenu",function() {
    // Si vous voulez ajouter un message d'alerte
    alert('Merci de respecter le travail du webmaster en ne copiant pas le contenu sans autorisation');
    // On indique au navigateur de ne pas réagir en cas de clic droit.
    return false;
});

// Cette partie du code est exécutée lorsque le document HTML est complètement chargé.
document.addEventListener('DOMContentLoaded', function () {
    // Initialise un objet Swiper pour créer un effet de galerie de voitures.
    var swiper = new Swiper(".swiper-container", {
        // Configuration spécifique à Swiper.
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

    // Configuration des particules dans le fond de la page.
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

    // Ajoute une classe à un conteneur spécifié pour positionner les particules en bas de la page.
    document.getElementById('particles-js-container').classList.add('bottom-start');
});
