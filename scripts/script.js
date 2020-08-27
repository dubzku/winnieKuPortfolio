// Namespace
const portfolio = {};

// Document Ready
$(document).ready(function(){
    portfolio.init();
})

// Init
portfolio.init = () => {
    AOS.init();
    portfolio.introHeading();
    portfolio.scrollEffects();
    portfolio.submitForm();
    portfolio.uncheckHamburger();
    portfolio.accessibleHamburger();
    portfolio.hamburgerMenu();
}

// Typed.js function in header intro 
portfolio.introHeading = () => {
    let options = {
        strings: ["", "Front-End Developer", "Avid Proofreader", "Emoji Enthusiast", "Toronto-based", "Let's work together"],
        typeSpeed: 50,
        loop: true,
        backDelay: 2000
    };

    let typed = new Typed('.introduction', options);
}

// Scrolling effects when links in nav bar are clicked
portfolio.scrollEffects = () => {
    $('.scroll').click(function () {
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 575);
    });
} 

// Error handling for if user hits "Submit" without typing anything in one of the fields
portfolio.submitForm = () => {
    $('form').on('submit', (event) => {
        const userName = $("input[type=text]").val();
        const userEmail = $("input[type=email]").val();
        const userMessage = $("textarea").val();

        if (!userName || !userEmail || !userMessage) {
            event.preventDefault();
            swal("Oops!", "Please complete all fields!");
        }
    })
}

// To toggle class for hamburger menu animation (.is-active class animates it into an X) 
portfolio.hamburgerMenu = () => {
    $('.hamburger').on('click', () => {
        $('.hamburger').toggleClass('is-active');
    })
}

// To uncheck the .hamburger input checkbox when any link is clicked, so the menu disappears
portfolio.uncheckHamburger = () => {
    $('.scroll').on('click', () => {
        $('#toggle').prop('checked', false);
        $('.hamburger').removeClass('is-active');
    })
}

// For Accessibility - so keyboard users can hit "enter" on the hamburger, and have it open the menu
portfolio.accessibleHamburger = () => {
    $('.hamburger').keypress(function(e) {
        if(e.which == 13 && $('#toggle').prop('checked') === false ) {
            $(this).trigger('click');
            $('#toggle').prop('checked', true);
        } else if (e.which == 13 && $('#toggle').prop('checked') === true) {
            $(this).trigger('click');
            $('#toggle').prop('checked', false);
        }
    });
}
