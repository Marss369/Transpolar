// Sticker Header

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});





// Toggle Mobile Menu

const toggleMenuBtn = document.querySelector("#toggle-btn");
const mobileMenu = document.querySelector(".mobile-menu");


toggleMenuBtn.addEventListener("click", () => {

    if (mobileMenu.classList.contains("m-m-show")) {

        mobileMenu.classList.remove("m-m-show");

        toggleMenuBtn.querySelector("i").classList.add("fa-bars");
        toggleMenuBtn.querySelector("i").classList.remove("fa-xmark");

    } else {

        mobileMenu.classList.add("m-m-show");

        toggleMenuBtn.querySelector("i").classList.remove("fa-bars");
        toggleMenuBtn.querySelector("i").classList.add("fa-xmark");
    }
})

// console.log(mobileMenu);






$('.owl-one').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});




$('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


// Scroll Top Button

const scrollTopBtn = document.getElementById("scroll-top-btn");

window.addEventListener("scroll", () => {

    if (document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }

})

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
}



//Counter

const counterSec = document.querySelector("#counter-sec");

let counter = document.querySelectorAll(".counter");

if (counterSec) {

    const counterObserver = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting) {

            counter.forEach((singleCounter) => {

                let i = 0;

                let count = setInterval(() => {

                    singleCounter.innerText = ++i;

                    if (i == singleCounter.dataset.stop) {
                        clearInterval(count);
                    }
                })
            })

            counterObserver.unobserve(entries[0].target);
        }
    }, { threshold: 1 })

    counterObserver.observe(counterSec);
}




// FAQ
const faqList = document.querySelectorAll(".faq-list");
const allFaqText = document.querySelectorAll(".faq-text");
const allFaqIcon = document.querySelectorAll(".faq-icon");


faqList.forEach((singleFaq) => {

    const faqHead = singleFaq.querySelector("h4");
    const faqText = singleFaq.querySelector(".faq-text");
    const faqIcon = faqHead.querySelector("i");


    faqHead.addEventListener("click", () => {

        if (faqText.classList.contains("faq-show")) {

            faqText.classList.remove("faq-show");
            faqIcon.classList.remove("faq-show-i");

        } else {

            allFaqIcon.forEach((singleFaqIcon) => {
                singleFaqIcon.classList.remove("faq-show-i");
            })

            allFaqText.forEach((singleFaqText) => {
                singleFaqText.classList.remove("faq-show");
            })

            faqText.classList.add("faq-show");
            faqIcon.classList.add("faq-show-i");

        }
    })

    // console.log(faqIcon);

})


