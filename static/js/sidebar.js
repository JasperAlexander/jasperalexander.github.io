const menuToggle = document.querySelectorAll(".menuToggleButton");
const menuSidebar = document.querySelector(".menuSidebar");
const overlay = document.querySelector(".overlay");

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuSidebar.classList.contains('open')) {
        menuSidebar.classList.remove("open");
        menuSidebar.classList.add("closed");
        document.body.classList.remove('noscroll');
        overlay.classList.remove("open");
    }
});

document.addEventListener('click', (e) => {
    if (e.target === overlay) {
        menuSidebar.classList.remove("open");
        menuSidebar.classList.add("closed");
        document.body.classList.remove('noscroll');
        overlay.classList.remove("open");
    }
});

menuToggle.forEach(item => { item.addEventListener("click", () => {
    menuSidebar.classList.toggle("open");
    menuSidebar.classList.toggle("closed");
    document.body.classList.toggle('noscroll');
    overlay.classList.toggle("open");
})});