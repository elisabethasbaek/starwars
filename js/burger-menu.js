
let burger = document.querySelector(".burgerMenu");
burger.addEventListener("click", showMenu);

let firstNav = document.querySelector("firstNav");
let secondNav = document.querySelector(".secondNav");

function showMenu(){
    navbar.style["margin-right"] = "-30vw"; //make menu visible in viewport
    navbar.style.transition = "1s cubic-bezier(0.68, -0.6, 0.32, 1.6)"; //ease in with bounce
}

function hideMenu(){
    navbar.style["margin-right"] = "-130vw"; //hide menu out of viewport
    navbar.style.transition = "2s"; //ease slowly out
}