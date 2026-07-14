/* ==========================================
   AXION INDUSTRIAL SOLUTIONS
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       Smooth Scroll
    ========================== */

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

    /* ==========================
       Popup
    ========================== */

    const popup = document.getElementById("popup");
    const popupForm = document.getElementById("popupForm");
    const closeBtn = document.querySelector(".close-btn");

    if (popup) {

        setTimeout(function () {

            popup.style.display = "flex";

        }, 1200);

    }

    if (closeBtn) {

        closeBtn.addEventListener("click", function () {

            popup.style.display = "none";

        });

    }

    if (popup) {

        popup.addEventListener("click", function (e) {

            if (e.target === popup) {

                popup.style.display = "none";

            }

        });

    }

    if (popupForm) {

        popupForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("popupName").value.trim();
            const phone = document.getElementById("popupPhone").value.trim();

            if (name === "" || phone === "") {

                alert("Please enter your Name and Phone Number.");

                return;

            }

            alert("Thank you! Our team will contact you shortly.");

            popupForm.reset();

            popup.style.display = "none";

        });

    }

    /* ===========================
        MOBILE MENU
     =========================== */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

    });

});
