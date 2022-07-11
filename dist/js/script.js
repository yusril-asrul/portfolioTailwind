// Navbar
window.onscroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav){
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
}

// Hamburger
const Hamburger = document.querySelector("#hamburger");
const NavMenu = document.querySelector("#nav-menu");
Hamburger.addEventListener("click",()=>{
    Hamburger.classList.toggle("hamburger-active");
    NavMenu.classList.toggle("hidden");
})
