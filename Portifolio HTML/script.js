document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("image-effect");
    const header = document.getElementById("header-effect");
    const intro = document.getElementById("intro-effect");
    const skillsHeader = document.getElementById("skills-header");
    const projectsHeader = document.getElementById("projects-header");

    image.addEventListener("mouseenter", function () {
        image.style.transform = "scale(1.2) rotate(10deg)";
        image.style.transition = "transform 0.5s ease";
    });

    image.addEventListener("mouseleave", function () {
        image.style.transform = "scale(1) rotate(0deg)";
    });

    image.addEventListener("click", function () {
        alert("Você clicou na imagem!");
    });

    function fadeInText(element, delay) {
        element.style.opacity = 0;
        element.style.transform = "translateY(-30px)";
        element.style.transition = `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`;

        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
        }, 100);
    }

    fadeInText(header, 0.2);
    fadeInText(intro, 0.4);
    fadeInText(skillsHeader, 0.6);
    fadeInText(projectsHeader, 0.8);
});
