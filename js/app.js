window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})







document.getElementById('menuButton').addEventListener('click', function() {
	document.body.classList.toggle('open');
});
document.querySelector('.backdrop').addEventListener('click', function() {
	document.body.classList.remove('open');
});