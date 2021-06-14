// Burger Menu
const burgerMenuBtn = document.querySelector(".burger_menu")
const burgerMenu = document.querySelector("nav ul")
const closeMenuBtn = document.querySelector(".close_menu_btn")

burgerMenuBtn.addEventListener("click", openMenu)
closeMenuBtn.addEventListener("click", closeMenu)

function openMenu() {
	burgerMenu.classList.add("openMenu")
	burgerMenuBtn.classList.add("openMenu")
	closeMenuBtn.classList.remove("hidden")
}
function closeMenu() {
	burgerMenu.classList.remove("openMenu")
	burgerMenuBtn.classList.remove("openMenu")
	closeMenuBtn.classList.add("hidden")
}