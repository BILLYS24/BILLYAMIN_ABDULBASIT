const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


//CLOSING EACH LIST AFTER CLICKING
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click" , function(){
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
})

prev.addEventListener("click" , function(){
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
})