// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Contact form message
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been received.");
        form.reset();
    });

window.onload = function () {

    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    popup.style.display = "flex";

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

};

window.addEventListener("click", function (e) {

    if (e.target.id === "popup") {
        document.getElementById("popup").style.display = "none";
    }

});
