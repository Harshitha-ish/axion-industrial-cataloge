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
} // <-- IMPORTANT (Missing bracket)

// Popup
window.onload = function () {

    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    if (popup) {
        popup.style.display = "flex";
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            popup.style.display = "none";
        });
    }
};

// Close when clicking outside
window.addEventListener("click", function (e) {
    if (e.target.id === "popup") {
        document.getElementById("popup").style.display = "none";
    }
});
