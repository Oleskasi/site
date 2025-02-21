document.addEventListener('DOMContentLoaded', function() {

	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-navigation__next',
			prevEl: '.showcase-navigation__prev'
		}
	})

	document.querySelector('video').playbackRate = 2

})





















document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const body = document.body;
    let isOpen = false;

    if (!menuButton || !menu || !body) {
        console.error('One or more elements not found');
        return;
    }

    const toggleMenu = (event) => {
        event.preventDefault();
        body.classList.toggle('open');
        isOpen = !isOpen;
    };

    menuButton.addEventListener('click', toggleMenu);
    menuButton.addEventListener('touchstart', toggleMenu);

    // Close menu when clicking outside
    window.addEventListener('click', function(event) {
        if (isOpen && event.target !== menuButton && !menu.contains(event.target)) {
            body.classList.remove('open');
            isOpen = false;
        }
    });

    window.addEventListener('touchstart', function(event) {
        if (isOpen && event.target !== menuButton && !menu.contains(event.target)) {
            body.classList.remove('open');
            isOpen = false;
        }
    });
});