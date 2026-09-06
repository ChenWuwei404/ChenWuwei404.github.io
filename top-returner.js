// @ts-check
function createTopReturner() {
    const mainSection = document.querySelector("main");

    if (!mainSection) return;

    const returnButton = document.createElement("button");
    returnButton.className = "top-return-button";
    returnButton.type = "button";
    returnButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4.08 11.92L12 4l7.92 7.92l-1.42 1.41l-5.5-5.5V22h-2V7.83l-5.5 5.5zM12 4h10V2H2v2z"/></svg>';

    returnButton.addEventListener("click", function(e) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })

    mainSection.append(returnButton);

    if (mainSection.getBoundingClientRect().top < -200) {
        returnButton.className = "top-return-button";
    } else {
        returnButton.className = "top-return-button top-return-button-hidden";
    }

    window.addEventListener('scroll', function(e) {
        if (mainSection.getBoundingClientRect().top < -200) {
            returnButton.className = "top-return-button";
        } else {
            returnButton.className = "top-return-button top-return-button-hidden";
        }
    ;})
}

document.addEventListener("DOMContentLoaded", function(e) {
    createTopReturner();
})