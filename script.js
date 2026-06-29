// ===============================
// Scroll Reveal
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }

    else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});
const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close-lightbox");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=image.src;

    });

});

closeBtn.onclick=function(){

    lightbox.style.display="none";

}

lightbox.onclick=function(e){

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

}

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        lightbox.style.display="none";

    }

});