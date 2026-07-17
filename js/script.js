/* ==========================================
   AXION INDUSTRIAL SOLUTIONS
========================================== */

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
   POPUP
========================================== */

window.onload=function(){

    const popup=document.getElementById("popup");

    if(popup){

        setTimeout(function(){

            popup.style.display="flex";

        },1000);

    }

}


const popupClose=document.querySelector(".close-btn");

if(popupClose){

    popupClose.onclick=function(){

        document.getElementById("popup").style.display="none";

    }

}


const popup=document.getElementById("popup");

if(popup){

    popup.onclick=function(e){

        if(e.target===popup){

            popup.style.display="none";

        }

    }

}


const popupForm=document.getElementById("popupForm");

if(popupForm){

popupForm.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you! Our team will contact you shortly.");

this.reset();

document.getElementById("popup").style.display="none";

});

}



/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle=document.getElementById("menu-toggle");

const mobileMenu=document.getElementById("mobile-menu");

const closeMenu=document.querySelector(".close-menu");

if(menuToggle){

menuToggle.onclick=function(){

mobileMenu.classList.add("active");

}

}

if(closeMenu){

closeMenu.onclick=function(){

mobileMenu.classList.remove("active");

}

}

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.onclick=function(){

mobileMenu.classList.remove("active");

}

});

/* ==========================================
ABOUT SCROLL ANIMATION
========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealAnimation(){

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const height=window.innerHeight;

        if(top < height-120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealAnimation);

revealAnimation();
