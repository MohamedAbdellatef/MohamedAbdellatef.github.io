$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

// Adjust scroll behavior dynamically to center sections
$(document).ready(function () {
    const navbarHeight = $('header').outerHeight();

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        const target = $($(this).attr('href'));

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - navbarHeight
            }, 500);
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Welcome To My Portfolio";
            $("#favicon").attr("href", "assets\images\loader.gif");
        }
        else {
            document.title = "Welcome to My Portfolio";
            $("#favicon").attr("href", "assets\images\loader.gif");
        }
    });


// <!-- typed js effect starts -->
if (document.querySelector(".typing-text")) {
    new Typed(".typing-text", {
        strings: ["Junior Data Engineer"],
        loop: false,
        typeSpeed: 45,
        showCursor: false,
    });
}
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// <!-- SCROLL REVEAL ANIMATION -->
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .home-name', { delay: 180 });
srtop.reveal('.home .home-role', { delay: 220 });
srtop.reveal('.home .home-summary', { delay: 260 });
srtop.reveal('.home .home-meta', { delay: 300 });
srtop.reveal('.home .home-cta', { delay: 340 });
srtop.reveal('.home .home-proof', { delay: 380 });
srtop.reveal('.home .home-links', { delay: 420 });
srtop.reveal('.home .home-visual', { delay: 320 });

/* SCROLL ABOUT */
srtop.reveal('.about .section-intro', { delay: 180 });
srtop.reveal('.about .about-media', { delay: 220 });
srtop.reveal('.about .about-lead', { delay: 260 });
srtop.reveal('.about .about-copy-text', { delay: 300 });
srtop.reveal('.about .about-actions', { delay: 340 });
srtop.reveal('.about .about-metrics', { delay: 380 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.projects .project-card-featured', { interval: 180 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
