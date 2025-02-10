const main = document.querySelector('.main');
const mediaQuery600px = window.matchMedia("(max-width: 600px)");
const mediaQuery1024px = window.matchMedia("(min-width: 1024px");
const heroSection = document.querySelector('.hero');
const images = document.querySelectorAll('.hero img');
const title = document.querySelector('.hero-title');
const aboutMeTitle1 = document.querySelector('.about-me-primary');
const aboutTitle2 = document.querySelector('.about-me-secondary');
const titleFaqs = document.querySelector('.title');
const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');
const card4 = document.querySelector('.card-4');
const aboutMeBoxs = document.querySelectorAll('.box');
const proyectImg1 = document.querySelector('.proyects-img-1');
const proyectImg2 = document.querySelector('.proyects-img-2');
const proyectImg3 = document.querySelector('.proyects-img-3');
const proyectImg4 = document.querySelector('.proyects-img-4');
const divPhrase1 = document.querySelector('.phrase-1');
const divPhrase2 = document.querySelector('.phrase-2');
const divPhrase3 = document.querySelector('.phrase-3');
const inspirationTitle = document.querySelector('.inspirational > h1');
const startsFaq = document.querySelector('.header');
const faqsSection = document.querySelector('.faqs');
const header = document.querySelector('.faqs .header');
const containerStart = startsFaq.yOffset;
const testimonialTitlePrimary = document.querySelector(".testimonials-title-primary");
const testimonialTitleSecondary = document.querySelector(".testimonials-title-secondary");
const initialBannerContent = document.querySelectorAll('.banner-content');
const buttons = document.querySelectorAll(".button");
const cvDownloadButton = document.getElementById("cv-download")
const proyectText = document.querySelector(".text-proyect > p");
console.log("Welcome to my website  :)");
console.log("If you like my work, text me!");

heroSection.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = heroSection;

    const xPercent = (clientX / offsetWidth) * 2 - 1;
    const yPercent = (clientY / offsetHeight) * 2 - 1;
    const intensity = 30;

    images.forEach((img, index) => {
        const xOffset = -xPercent * (intensity + index * 5);
        const yOffset = -yPercent * (intensity + index * 5);
        img.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });

});

const handleProyectSectionImgs = (scroll) => {
    if (scroll >= 3800) {
        proyectImg1.style.transform = "translate3d(0px, 0px, 0px) rotateZ(-5deg)";
        proyectImg2.style.transform = "translate3d(0px, 0px, 0px) rotateZ(0deg)";
        proyectImg3.style.transform = "translate3d(0px, 0px, 0px) rotateZ(0deg)";
        proyectImg4.style.transform = "translate3d(0px, 0px, 0px) rotateZ(5deg)";
        proyectText.style.opacity = 1;
        proyectText.style.animation = "focus-in-expand-fwd 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    } else {
        proyectImg1.style.transform = "translate3d(-370px, 0px, 0px) rotateZ(-25deg)";
        proyectImg2.style.transform = "translate3d(-160px, 0px, 0px) rotateZ(-20deg)";
        proyectImg3.style.transform = "translate3d(250px, 0px, 0px) rotateZ(20deg)";
        proyectImg4.style.transform = "translate3d(370px, 0px, 0px) rotateZ(25deg)";
        proyectText.style.opacity = 0;
        proyectText.style.animation = ""
    }
}

const handleTestimonialCards = (scroll) => {
    if (scroll >= 4810) {
        card1.style.opacity = 1;
        card1.style.transform = "translate3d(0px, 0px, 0px) rotateZ(0deg)";
    } else {
        card1.style.opacity = 0.3;
        card1.style.transform = "translate3d(-259px, 0px, 0px) rotateZ(-22deg)"
    }

    if (scroll >= 4890) {
        card2.style.opacity = 1;
        card2.style.transform = "translate3d(0px, 0px, 0px) rotateZ(0deg)";
    } else {
        card2.style.opacity = 0.3;
        card2.style.transform = "translate3d(259px, 0px, 0px) rotateZ(22deg)"
    }

    if (scroll >= 5000) {
        card3.style.opacity = 1;
        card3.style.transform = "translate3d(0px, 0px, 0px) rotateZ(0deg)";
    } else {
        card3.style.opacity = 0.3;
        card3.style.transform = "translate3d(-259px, 0px, 0px) rotateZ(-22deg)"
    }

    if (scroll >= 5050) {
        card4.style.opacity = 1;
        card4.style.transform = "translate3d(0px, 0px, 0px) rotateZ(0deg)";
    } else {
        card4.style.opacity = 0.3;
        card4.style.transform = "translate3d(259px, 0px, 0px) rotateZ(22deg)"
    }
}

const handleInspirationalPhrases = (scroll) => {
    if ((scroll >= 2190 && !mediaQuery600px.matches) || (scroll >= 2841 && mediaQuery600px.matches)) {
        divPhrase2.style.transform = "rotate(-2deg) translateY(-45px)"
    } else {
        divPhrase2.style.transform = "rotate(-2deg) translateY(0px)"
    }

    if ((scroll >= 2300 && !mediaQuery600px.matches) || (scroll >= 2868 && mediaQuery600px.matches)) {
        divPhrase3.style.transform = "rotate(2deg) translateY(-70px)"
    } else {
        divPhrase3.style.transform = "rotate(2deg) translateY(0px)"
    }
}

const handleImgHeroSection = (scroll) => {

    const translateZ = -4.9085 + (-0.06145) * (scroll - 240);
    const rotateZ = 1.47255 + 0.01843 * (scroll - 240);
    heroSection.style.transform = scroll === 0 ? `translate3d(0px, 0px, 0vh) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` : `translate3d(0px, 0px, ${translateZ}vh) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`;
};

const handleTitles = (scroll) => {
    if (scroll >= 1070) {
        aboutMeTitle1.style.backgroundPosition = "0";
        if (scroll >= 1084) {
            if (mediaQuery600px.matches) {
                aboutMeTitle1.style.transform = "translateX(-20px)";
            } else {
                aboutMeTitle1.style.transform = "translateX(70px)";
            }
        } else {
            if (mediaQuery600px.matches) {
                aboutMeTitle1.style.transform = "translate(-70px)";
            } else {
                aboutMeTitle1.style.transform = "translate(0px)";
            }
        }
    } else {
        aboutMeTitle1.style.backgroundPosition = "100%"
    }

    if (scroll >= 1100) {
        aboutTitle2.style.backgroundPosition = "0";
        if (scroll >= 1150) {

            if (mediaQuery600px.matches) {
                aboutTitle2.style.transform = "translateX(20px)";
            } else {
                aboutTitle2.style.transform = "translateX(140px)";
            }
        }

    } else {
        if (mediaQuery600px.matches) {
            aboutTitle2.style.transform = "translateX(-70px)";
        } else {
            aboutTitle2.style.transform = "translateX(0px)";
        }
        aboutTitle2.style.backgroundPosition = "100%"
    }
    if (scroll >= 1300) {
        aboutMeBoxs[0].style.opacity = 1;
    } else {
        aboutMeBoxs[0].style.opacity = 0;
    }
    if (scroll >= 1320) {
        aboutMeBoxs[1].style.opacity = 1
    } else {
        aboutMeBoxs[1].style.opacity = 0
    }
    if (scroll >= 1350) {
        aboutMeBoxs[2].style.opacity = 1
    } else {
        aboutMeBoxs[2].style.opacity = 0
    }

    if ((scroll >= 2700 && !mediaQuery600px.matches) || (mediaQuery600px.matches && scroll >= 3256)) {
        titleFaqs.style.backgroundPosition = "0"
    } else {
        titleFaqs.style.backgroundPosition = "100%"
    }

    if ((scroll >= 2120 && !mediaQuery600px.matches) || (scroll >= 2700 && mediaQuery600px.matches)) {
        inspirationTitle.style.animation = "scale-up-ver-bottom 0.8s"
        inspirationTitle.style.opacity = 1;
    } else {
        inspirationTitle.style.animation = "none"
        inspirationTitle.style.opacity = 0;
    }



    if ((scroll >= 4500 && !mediaQuery600px.matches) || (mediaQuery600px.matches && scroll >= 4216)) {
        testimonialTitlePrimary.style.backgroundPosition = "0px"
        if (!mediaQuery600px.matches) {
            testimonialTitlePrimary.style.transform = "translateX(70px)";
        }
    } else {
        testimonialTitlePrimary.style.backgroundPosition = "100%"
        testimonialTitlePrimary.style.transform = "translateX(0px)";
    }

    if ((scroll >= 4600 && !mediaQuery600px.matches) || (mediaQuery600px.matches && scroll >= 4456)) {
        testimonialTitleSecondary.style.backgroundPosition = "0px"
        testimonialTitleSecondary.style.transform = mediaQuery600px.matches ? "translateX(70px)" : "translateX(140px)";
    } else {
        testimonialTitleSecondary.style.backgroundPosition = "100%"
        testimonialTitleSecondary.style.transform = "translateX(0px)";
    }

}

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const minScroll = 240;
    const maxScroll = 1020;
    const minTranslateX = -4.548;
    const maxTranslateX = -72.924;
    const clampedScrollY = Math.max(minScroll, Math.min(scrollTop, maxScroll));
    const progress = (clampedScrollY - minScroll) / (maxScroll - minScroll);

    const translateX = minTranslateX + progress * (maxTranslateX - minTranslateX);

    for (let i = 0; i < initialBannerContent.length; i++) {
        const element = initialBannerContent[i];
        element.style.transform = `translate3d(${translateX}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    }

    handleProyectSectionImgs(scrollTop);
    handleTestimonialCards(scrollTop);
    handleInspirationalPhrases(scrollTop);
    handleTitles(scrollTop);
    if (mediaQuery1024px.matches) {
        handleImgHeroSection(scrollTop);
    }

});

cvDownloadButton.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "assets/Milagros_Doldan_CV_es.pdf"; // Reemplaza con la URL de tu PDF
    link.download = "archivo.pdf"; // Nombre con el que se guardará el PDF
    link.click();
});