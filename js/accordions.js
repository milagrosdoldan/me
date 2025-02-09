var accordions = document.getElementsByClassName("accordion");

for (i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function (e) {
        const isActive = this.classList.contains("expanded");

        document.querySelectorAll(".accordion.expanded").forEach((activeAcc) => {
            activeAcc.classList.remove("expanded");
            activeAcc.nextElementSibling.style.maxHeight = null;
        });

        if (!isActive) {
            this.classList.add("expanded");
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
        }
    });
}
