// const navbarButton = document.querySelector('.navbar-menu-button');
// const navbarButtonImg = document.querySelector('.navbar-menu-button > img');
// const firstMenu = document.querySelector(".navbar-menu-first");
// const secondMenu = document.querySelector(".navbar-menu-second");
// const menuOptions = document.querySelectorAll(".menu-options > a");
// const contactButtons = document.querySelectorAll(".menu-icons > button");
// const emailDescription = document.querySelector(".email-contact");
// const imageButtonNavbar = document.querySelector(".navbar-menu-button > img");
// const heroSection2 = document.querySelector('.hero');
// navbarButton.addEventListener('click', () => {
//     if (firstMenu.className.includes("show") && secondMenu.className.includes("show")) {
//         firstMenu.classList.remove("show");
//         secondMenu.classList.remove("show");

//         imageButtonNavbar.src = "assets/icons/menu-bars.svg";
//         for (let i = 0; i < menuOptions.length; i++) {
//             menuOptions[i].classList.remove("show");
//         }
//         for (let i = 0; i < contactButtons.length; i++) {
//             contactButtons[i].classList.remove("show");
//         }
//         heroSection2.style.opacity = 1;
//         main.style.perspective = "1000px"

//     } else {
//         heroSection2.style.opacity = 0;

//         main.style.perspective = "none"

//         imageButtonNavbar.src = "assets/icons/x.svg";
//         emailDescription.classList.add("show");
//         for (let i = 0; i < menuOptions.length; i++) {
//             const element = menuOptions[i];
//             element.classList.add("show");
//         }
//         for (let i = 0; i < contactButtons.length; i++) {
//             const element = contactButtons[i];
//             element.classList.add("show");
//         }
//         secondMenu.classList.add("show");
//         firstMenu.classList.add("show");
//     }
// });
// navbarButtonImg.addEventListener("mouseenter", () => {
//     navbarButtonImg.style.transition = "transform 0.1s ease-out";  // Suaviza el movimiento
// });

// navbarButtonImg.addEventListener("mousemove", (event) => {
//     const { left, top, width, height } = navbarButtonImg.getBoundingClientRect();

//     // Calculamos la diferencia entre la posición del mouse y el centro del botón
//     const offsetX = event.clientX - (left + width / 2);
//     const offsetY = event.clientY - (top + height / 2);

//     // Limitamos el movimiento a un máximo de ±20px
//     const maxMove = 20;
//     const moveX = Math.max(-maxMove, Math.min(maxMove, offsetX));
//     const moveY = Math.max(-maxMove, Math.min(maxMove, offsetY));

//     // Aplicamos el movimiento al botón
//     navbarButtonImg.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;

// });

// navbarButtonImg.addEventListener("mouseleave", () => {
//     // Al salir, volvemos al centro con transición
//     navbarButtonImg.style.transition = "transform 0.2s ease-out";
//     navbarButtonImg.style.transform = "translate3d(0, 0, 0)";
// });

