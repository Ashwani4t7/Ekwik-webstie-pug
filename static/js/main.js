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

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3) {
        counter = 1;
    }
}, 5000);


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });