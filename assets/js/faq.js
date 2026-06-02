const knapper = document.querySelectorAll(".accordionKnap");

knapper.forEach(knap => {
    knap.addEventListener("click", () => {
        const item = knap.closest(".accordionItem");
        const indhold = item.querySelector(".accordionIndhold");

        knap.classList.toggle("aktiv");
        indhold.classList.toggle("aktiv");
        item.classList.toggle("aktiv");
    });
});