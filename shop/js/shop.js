'use strict';

const addProduct = document.querySelectorAll('.add');
const count = document.querySelector('#cart-count');
const totalPrice = document.querySelector('#cart-total-price');
let counter = 0;
let total = 0;

function addCart(){
	count.innerHTML = ++counter;
	total += +this.dataset.price;
	totalPrice.innerHTML = getPriceFormatted(total);	
};

for (const product of addProduct){ 
	product.addEventListener('click', addCart); 
};