const cursor = document.querySelector('.cursor-main');
const expandCursorSection = document.querySelectorAll(".expand-cursor");
const footerWrapper = document.querySelector(".footer-wrapper");

expandCursorSection.forEach(el => {
    if (!el.classList.contains("not-move")) {

        el.addEventListener("mousemove", (event) => {
            const { left, top, width, height } = el.getBoundingClientRect();

            const offsetX = event.clientX - (left + width / 2);
            const offsetY = event.clientY - (top + height / 2);

            // Limitamos el movimiento a un máximo de ±20px
            const maxMove = 20;
            const moveX = Math.max(-maxMove, Math.min(maxMove, offsetX));
            const moveY = Math.max(-maxMove, Math.min(maxMove, offsetY));

            // Aplicamos el movimiento al botón
            el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;

        });
    }

    el.addEventListener("mouseenter", (e) => {
        el.style.transition = "transform 0.1s ease-out";
        cursor.style.width = "100px";
        cursor.style.height = "100px";
        cursor.style.filter = "blur(20px)"
    });

    el.addEventListener("mouseleave", (e) => {
        cursor.style.width = "18px";
        cursor.style.height = "18px";
        cursor.style.filter = "blur(0px)"
        el.style.transition = "transform 0.2s ease-out";
        el.style.transform = "translate3d(0, 0, 0)";
    });

})


footerWrapper.addEventListener("mouseenter", (e) => {
    cursor.style.width = "400px";
    cursor.style.height = "400px";
    cursor.style.filter = "blur(100px)"
});

footerWrapper.addEventListener("mouseleave", (e) => {
    cursor.style.width = "18px";
    cursor.style.height = "18px";
    cursor.style.filter = "blur(0px)"
});

document.addEventListener('mousemove', (e) => {
    let targetX = e.pageX;
    let targetY = e.pageY;
    let currentX = parseFloat(cursor.style.left) || 0;
    let currentY = parseFloat(cursor.style.top) || 0;

    const speed = 0.3;
    const newX = currentX + (targetX - currentX) * speed;
    const newY = currentY + (targetY - currentY) * speed;

    cursor.style.left = `${newX}px`;
    cursor.style.top = `${newY}px`;
});
