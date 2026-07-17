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
   COUNTER
========================================== */

const counters=document.querySelectorAll(".counter");

const speed=200;

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.querySelectorAll(".counter").forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(update,10);

}else{

counter.innerText=target;

}

};

update();

});

counterObserver.unobserve(entry.target);

}

});

});

const counterSection=document.querySelector(".counter-grid");

if(counterSection){

counterObserver.observe(counterSection);

}

/* ==========================================
   SCROLL ANIMATION
========================================== */

const revealElements=document.querySelectorAll(

'.about-left,.about-image,.about-feature,.counter-card,.about-badge'

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});
