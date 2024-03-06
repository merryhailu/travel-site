//  change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
})

//show /hide nav menu

const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector("#open-btn");
const closebtn = document.querySelector("#close-btn");

menubtn.addEventListener('click', () => {
    menu.style.display = "flex"
    closebtn.style.display = "inline-block"
    menubtn.style.display = "none"
})

//close nav menu


const closeNav = () => {
    menu.style.display = "none"
    closebtn.style.display = "none"
    menubtn.style.display = "inline-block"
}

closebtn.addEventListener('click', closeNav)