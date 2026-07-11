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

/* ==========================================
   POPUP
========================================== */

window.addEventListener("load", function () {

    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");
    const popupForm = document.getElementById("popupForm");

    if (popup) {

        setTimeout(() => {

            popup.style.display = "flex";

        }, 600);

    }

    if (closeBtn) {

        closeBtn.addEventListener("click", function () {

            popup.style.display = "none";

        });

    }

    window.addEventListener("click", function (e) {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    });

    if (popupForm) {

        popupForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("popupName").value.trim();
            const phone = document.getElementById("popupPhone").value.trim();

            if (name === "" || phone === "") {

                alert("Please enter Name and Phone Number.");

                return;

            }

            alert("✅ Thank you! Our team will contact you shortly.");

            popup.style.display = "none";

            popupForm.reset();

        });

    }

});

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

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", ()=>{

        navLinks.classList.toggle("active");

        if(navRight){
            navRight.classList.toggle("active");
        }

    });

    document.querySelectorAll("#nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

            if(navRight){
                navRight.classList.remove("active");
            }

        });

    });

}
