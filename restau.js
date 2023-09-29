document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



const navLinks = document.querySelectorAll(".nav-links a");


function updateActiveLinkColor() {
    
    navLinks.forEach((link) => {
        const sectionId = link.getAttribute("href").substring(1); 
        const section = document.getElementById(sectionId); 
        const rect = section.getBoundingClientRect(); 
        
        if (
            rect.top >= 0 &&
            rect.bottom <= window.innerHeight
        ) {
            link.style.color = "#ff5722"; 
        } else {
            link.style.color = ""; 
        }
    });
}


window.addEventListener("scroll", updateActiveLinkColor);
window.addEventListener("resize", updateActiveLinkColor);


updateActiveLinkColor();
