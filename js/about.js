window.onscroll = function () {
    headerShadow();
};

function headerShadow() {
    const navHeader = document.getElementById("navHeader");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "60px";
        navHeader.querySelector('.navbar-brand img')
    } else {
        navHeader.style.boxShadow = "none";
        // navHeader.style.height = "90px";
        navHeader.querySelector('.navbar-brand img');
    }
}

// transition para don sa burger
document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.addEventListener('show.bs.collapse', function () {
        navbarCollapse.classList.add('showing');
    });
    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        navbarCollapse.classList.remove('hiding');
    });
});

// sarado burger kapag na click yung link

document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
});



//  typing effect

var typingEffect = new Typed(".typed-text", {
strings: ['Web Developer', 'Web Designer', 'Tropa ni CJ'],
loop: true,
typeSpeed: 100,
backSpeed: 80,
backDelay: 2000

})

// scroll animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// scroll home
sr.reveal('.content-text',{})
sr.reveal('.content-name', {delay: 100})
sr.reveal('.content-info', {delay: 200})
sr.reveal('.content-btn', {delay: 300})
sr.reveal('.socmed-icon', {delay: 200})
sr.reveal('.content-img', {delay: 300})


//  scroll project 
sr.reveal('.project-card', {interval: 200})

// scroll header
sr.reveal('.section-title',{})
sr.reveal('.section-subtitle', {delay: 100})

//  scroll about and contact
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});


srLeft.reveal('.about-intro', {delay: 100})
srLeft.reveal('.contact-info', {delay: 200})

srLeft.reveal('.about-skills', {delay: 100})
srLeft.reveal('.contact-form', {delay: 200})






// kapag naclick mo yung navlink mag scroll sa section

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav a');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navbar-nav a[href*="' + sectionId + '"]').classList.add('active-link');
        } else {
            document.querySelector('.navbar-nav a[href*="' + sectionId + '"]').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetPosition = targetElement.offsetTop - 100; 

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

