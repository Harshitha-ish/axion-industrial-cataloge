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
