function toggleNav() {
    const navbar = document.getElementById("navbar");
    const content = document.querySelector(".content");
    
    navbar.classList.toggle("expanded");
    content.classList.toggle("expanded");
}