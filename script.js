const menutoggle = document.querySelector(".menu-toggle");
const navmenu = document.querySelector(".nav-menu");

menutoggle.addEventListener("click", () => {
    menutoggle.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menutoggle.classList.remove("active");
    navmenu.classList.remove("active");
}))
