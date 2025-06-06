/*=============Toggle icon navbar ==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*============== Scroll Sections active link ==================*/
let Sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*============== Sticky navbar ===============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrolly > 100);

    /*=========== remove toggle icon and navbar when click navbar link (scroll) ============== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.toggle('active');
};

/*============== Scroll Reveal ===============*/

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

/*============== Typed Js ===============*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'UI/UX Designier'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});
