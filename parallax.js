const container = document.getElementById("lucas-container");
const about = document.getElementById("scroll-button-container");

window.addEventListener("scroll", parallax);

function parallax() {
    const distance = window.scrollY;
    container.style.transform = "translateY("+ distance * 0.4 +"px)";
    about.style.transform = "translateY("+ distance * 0.4 +"px)";
}