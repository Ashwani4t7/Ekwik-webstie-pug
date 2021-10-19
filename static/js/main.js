window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            this.document.querySelector("header").classList.add('is-scrolling');
        }
        else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });
    const menu_btn = document.querySelector('#hamburger');
    const phone_menu = document.querySelector('#phone-menu');


    menu_btn.addEventListener('click', function ( ) {
        menu_btn.classList.toggle('is-active');
        phone_menu.classList.toggle('is-active');
    })

}