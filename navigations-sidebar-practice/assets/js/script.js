"use strict";



//let h1 = document.querySelector("h1");

// console.log(h1.parentNode.nextElementSibling.previousElementSibling);

//console.log(h1.closest(".product").lastElementChild);

//console.log(h1.closest(".product").children);

//let elem = document.querySelector(".item1");

//console.log(elem.parentNode.parentNode.nextElementSibling.firstElementChild);

//let elem = document.querySelector("h1");

//console.log(h1.parentNode.lastElementChild.lastElementChild)

//console.log(h1.nextElementSibling.lastElementChild)


// let btns = document.querySelectorAll("button");
// let elem = document.querySelector("h1");

// btns.forEach(btn => {
//     btn.addEventListener("click", function () {
//        this.nextElementSibling.style.backgroundColor = "red";
//     })
// });



// document.addEventListener("keydown", function (e) {
//     if (e.keyCode == 13) {
//         document.querySelector("body").style.backgroundColor = "green"
//     }
// });


// let elem = document.querySelector(".btn-outline-success");
// let box = document.querySelector("body");


// elem.addEventListener("click", function () {
//     box.style.backgroundColor = "black"
// })


// let sidebar = document.querySelector(".sidebar");
// let openIcon = document.querySelector(".open-icon");
// let closeIcon = document.querySelector(".close-icon");

// openIcon.addEventListener("click", function () {
//     sidebar.classList.remove("move-sidebar");
//     this.classList.add("d-none");
//     this.previousElementSibling.classList.remove("d-none")
// })

// closeIcon.addEventListener("click", function () {
//     sidebar.classList.add("move-sidebar");
//     this.classList.add("d-none");
//     this.nextElementSibling.classList.remove("d-none");
// })

// let sendBtn = document.querySelector(".send");

// let warning = document.querySelector(".warning");


// sendBtn.addEventListener("mouseover",function(){
//     warning.classList.remove("btn-warning");
//     warning.classList.add("btn-success")
// })

// sendBtn.addEventListener("mouseout",function(){
//     warning.classList.remove("btn-success");
//     warning.classList.add("btn-warning")
// })


// let input = document.querySelector("input");

// input.addEventListener("keydown",function(){
//     console.log("hello")
// })

// input.addEventListener("keyup",function(){
//     console.log("hello")
// })

// input.addEventListener("keypress",function(){
//     console.log("hello")
// })


// document.querySelector(".form-select").addEventListener("click",function(){

// })

//console.log(document.querySelector("a").hasAttribute("href"));

//document.querySelector("a").setAttribute("href","salam");





let linkedinBtn = document.querySelector(".linkedin");
let googleBtn = document.querySelector(".google");

linkedinBtn.addEventListener("click", function () {
    document.querySelector("a").setAttribute("href", "https://az.linkedin.com/");
    document.querySelector("a").innerText = "Go to linkedin";
})



googleBtn.addEventListener("click", function () {
    document.querySelector("a").setAttribute("href", "https://www.google.co.jp/");
    document.querySelector("a").innerText = "Go to google";
})