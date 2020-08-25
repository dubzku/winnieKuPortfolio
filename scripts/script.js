// Namespace
const portfolio = {};

// Document Ready
$(document).ready(function(){
    portfolio.init();
})

// Init
portfolio.init = () => {
    portfolio.introHeading();
    portfolio.scrollEffects();
    portfolio.submitForm();
    console.log('init is working!');
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