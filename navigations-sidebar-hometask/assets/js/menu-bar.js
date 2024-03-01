"use strict"

let home = document.querySelector(".home-page");
let about = document.querySelector(".about-page");
let product = document.querySelector(".product-page");
let service = document.querySelector(".service-page");
let contact = document.querySelector(".contact-page");

let homelist = document.querySelector(".home");
let aboutlist = document.querySelector(".about");
let productlist = document.querySelector(".product");
let servicelist = document.querySelector(".service");
let contactlist = document.querySelector(".contact-list");




home.addEventListener("mouseover", function () {
    homelist.classList.remove("d-none");
    aboutlist.classList.add("d-none");
    productlist.classList.add("d-none");
    servicelist.classList.add("d-none");
    contactlist.classList.add("d-none");

})

about.addEventListener("mouseover", function () {
    aboutlist.classList.remove("d-none");
    homelist.classList.add("d-none");
    productlist.classList.add("d-none");
    servicelist.classList.add("d-none");
    contactlist.classList.add("d-none");

})

product.addEventListener("mouseover", function () {
    productlist.classList.remove("d-none");
    aboutlist.classList.add("d-none");
    homelist.classList.add("d-none");
    servicelist.classList.add("d-none");
    contactlist.classList.add("d-none");

})

service.addEventListener("mouseover", function () {
    servicelist.classList.remove("d-none");
    productlist.classList.add("d-none");
    aboutlist.classList.add("d-none");
    homelist.classList.add("d-none");
    contactlist.classList.add("d-none");

})

contact.addEventListener("mouseover", function () {
    contactlist.classList.remove("d-none");
    servicelist.classList.add("d-none");
    productlist.classList.add("d-none");
    aboutlist.classList.add("d-none");
    homelist.classList.add("d-none");


})


