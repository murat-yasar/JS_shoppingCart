'use strict';

// CONSTANTS & VARIABLES
const elements = {};
let frameIndex = 1;
let totalPrice;
let numOfCartItems;

// FUNCTIONS
const domMapping = () => {
   // elements.cartIcon = document.querySelector('#cart-icon');

   elements.slides = document.querySelector('.slideDiv');
   elements.details = document.querySelector('.mainFrameDiv');
   elements.arrowLeft = document.querySelector('#left')
   elements.arrowRight = document.querySelector('#right')

   elements.main = document.querySelector(".main");
   elements.addButtons = document.querySelector(".btnAdd");

   elements.cart = document.querySelector(".cart-container");
   elements.table = document.querySelector("#cart-table");
   elements.quant = document.querySelector("#items-quantity");
   elements.total = document.querySelector("#total");

   elements.footer = document.querySelector(".footer");
}

const appendEventlisteners = () => {
   elements.arrowLeft.addEventListener('click', toPrevSlide);
   elements.arrowRight.addEventListener('click', toNextSlide);
}

const init = () => {
   domMapping();
   // appendEventlisteners();
   initCart();
   getSlides();
   getProducts();
   // initFooter();
}

// INITIALIZE
init();