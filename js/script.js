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

    /* ==========================================
   POPUP
========================================== */

window.addEventListener("load", function(){

    const popup = document.getElementById("popup");

    if(!popup) return;

    setTimeout(function(){

        popup.style.display = "flex";

    },1000);

});

const popupClose = document.querySelector(".close-btn");

if(popupClose){

    popupClose.addEventListener("click", function(){

        document.getElementById("popup").style.display = "none";

    });

}
   
   /* ==========================================
   MOBILE MENU
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.querySelector(".close-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu a");

    /* Open Menu */
    if(menuToggle){

        menuToggle.addEventListener("click", function(){

            mobileMenu.classList.add("active");

        });

    }

    /* Close Button */
    if(closeMenu){

        closeMenu.addEventListener("click", function(){

            mobileMenu.classList.remove("active");

        });

    }

    /* Close Menu when clicking any link */
    menuLinks.forEach(function(link){

        link.addEventListener("click", function(){

            mobileMenu.classList.remove("active");

        });

    });

});
