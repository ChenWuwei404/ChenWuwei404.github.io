// @ts-check
function navbarAuto() {
    const navbar = document.querySelector("#navbar");
    const mainSection = document.querySelector("main");

    if (!navbar || !mainSection) return;

    window.addEventListener('scroll', function(e) {
        if (mainSection.getBoundingClientRect().top < 100) {
            navbar.classList.remove("hidden-navbar");
        } else {
            navbar.classList.add("hidden-navbar");
        }
    });
}

document.addEventListener("DOMContentLoaded", function(e) {
    navbarAuto();
})