
/* ---------------------------------Scroll Reveal ------------------------------- */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, ', { origin: 'top' });
ScrollReveal().reveal('.home-img, .btn-container, .skill-content, .edu-card, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .fade-heading', { origin: 'left' });
ScrollReveal().reveal('.intro, .about-content, .btn, .front-heading', { origin: 'right' });

/*-------------------------------------- Typed Js --------------------------------------------*/

const typed = new  Typed('.multi-txt', {
    strings: ['John Doe','A Frontend Developer', 'A Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const typed2 = new  Typed('.multi-txt2', {
    strings: ['A Frontend Developer And A Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: false
});
