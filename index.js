let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login");
let formClose = document.querySelector("#form-close");

formBtn.addEventListener("click", ()=>{
    loginForm.classList.add("active");
});
formClose.addEventListener("click", ()=>{
    loginForm.classList.remove("active");
});

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop : true,
    autoplay :{
        delay:2500, 
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
});


var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop : true,
    autoplay :{
        delay:2500, 
        disableOnInteraction:false,
    },
    breakpoints:{
        450:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
        1200:{
            slidesPerView:4,
        },
    },
});
