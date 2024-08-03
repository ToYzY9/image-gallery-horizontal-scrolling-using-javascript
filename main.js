const main = () => {
    console.time("Chargement términée");
    console.timeEnd("Chargement términée");
    let scrollContainer = document.querySelector(".gallery");
    let nextBtn = document.querySelector("#nextBtn");
    let backBtn = document.querySelector("#backBtn");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto";
    });

    nextBtn.addEventListener("click", () => {
        scrollContainer.scrollLeft += 900;
    });
    backBtn.addEventListener("click", () => {
        scrollContainer.scrollLeft -= 900;
    });
};

window.addEventListener("DOMContentLoaded", main);
