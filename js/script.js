// =============================
// Smooth Scroll
// =============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =============================
// Popup
// =============================
window.addEventListener("load", () => {

    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    if (popup) {
        popup.style.display = "flex";
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

});

// Close popup when clicking outside
window.addEventListener("click", function (e) {

    const popup = document.getElementById("popup");

    if (e.target === popup) {
        popup.style.display = "none";
    }

});

// =============================
// Popup Form Submit
// =============================
const popupForm = document.getElementById("popupForm");

if (popupForm) {

    popupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("popupName").value.trim();
        const phone = document.getElementById("popupPhone").value.trim();
        const email = document.getElementById("popupEmail").value.trim();
        const message = document.getElementById("popupMessage").value.trim();

        if (name === "" || phone === "") {
            alert("Please enter Name and Phone Number.");
            return;
        }

        alert("Thank you! We will contact you shortly.");

        this.reset();

        document.getElementById("popup").style.display = "none";

    });

}

// =============================
// Contact Form Submit
// =============================
const contactForm = document.querySelector(".contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("✅ Thank you! Your enquiry has been submitted successfully.\n\nOur team will contact you shortly.");

        this.reset();

        if(this.closest(".popup-box")){
            document.getElementById("popup").style.display="none";
        }

    });

}

/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

const navRight = document.getElementById("nav-right");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    navRight.classList.toggle("active");

});

/* Close Menu After Click */

document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        navRight.classList.remove("active");

    });

});
