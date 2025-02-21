window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const body = document.body;

    if (!menuButton || !menu || !body) {
        console.error('One or more elements not found');
        return;
    }

    const toggleMenu = (event) => {
        event.preventDefault();
        body.classList.toggle('open');
    };

    menuButton.addEventListener('click', toggleMenu);
    menuButton.addEventListener('touchstart', toggleMenu);

    // Close menu when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target !== menuButton && !menu.contains(event.target)) {
            body.classList.remove('open');
        }
    });

    window.addEventListener('touchstart', function(event) {
        if (event.target !== menuButton && !menu.contains(event.target)) {
            body.classList.remove('open');
        }
    });
});