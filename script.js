document.getElementById("menuToggle").addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
