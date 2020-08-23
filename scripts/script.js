// Namespace
const portfolio = {};

// Document Ready
$(document).ready(function(){
    portfolio.init();
})

// Init
portfolio.init = () => {
    console.log('init is connected');
    portfolio.introHeading();
}

// intro heading
portfolio.introHeading = () => {
    let options = {
        strings: ["Hey, it's Winnie!", "Front-End Developer", "Proofreading Enthusiast", "Toronto-based", "Let's work together"],
        typeSpeed: 50,
        loop: true,
        backDelay: 2000
    };

    let typed = new Typed('.introduction', options);
}