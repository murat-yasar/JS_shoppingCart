/* CONSTANTS & VARIABLES */
let cartList = [];   // list of items to buy

// receive data from local storage to continue the last session
const initCart = () => {
   let prevBuyString = localStorage.getItem('myCart');
   let storedItemsObjectified = JSON.parse(prevBuyString);
   cartList = storedItemsObjectified;
   updateCart();
}

/* MAIN FUNCTIONS */
// UPDATE cart
const updateCart = () => {

   // empty cart html to render up to date
   elements.table.innerHTML = '';
   let totalPrice = 0;

   // create new html elements to show every item in the cart
   for (let i in cartList) {
      let itemPrice = cartList[i].price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      let newEl = dom.create(false, elements.table, 'tr', false);
      let elName = dom.create(cartList[i].title, newEl, 'td', false);
      let elPrice = dom.create(`${itemPrice} €`, newEl, 'td', false);
      let btnDel = dom.create(`Delete`, newEl, 'td', 'btnDel');
      btnDel.addEventListener('click', () => removeFromCart(i, cartList[i].id));
      totalPrice += Number(cartList[i].price);
   }

   elements.quant.innerText = cartList.length;
   elements.total.innerHTML = `${totalPrice.toLocaleString("en-US")} €`;

   saveCart();
}

// ADD new item to Cart
const addToCart = (id, title, price) => {
   // create an object to save data for the item to buy
   let itemToBuy = {
      id: id,
      title: title,
      price: price
   };

   // add item to cart to buy
   cartList.push(itemToBuy);

   printInfoMessage(itemToBuy.title, 'ADD');
   updateCart();
}

// REMOVE item from Cart
const removeFromCart = (index, id) => {
   for (let i in cartList) {
      if ( i === index && cartList[i].id === id) {
         printInfoMessage(cartList[i].title, 'REMOVE');

         // remove selected item from cartlist array
         cartList.splice(i, 1);
      }
   }
   updateCart();
}

// REMOVE ALL items from Cart
const emptyCart = () => {
   // empty cartlist array
   cartList = [];
   printInfoMessage(null, 'EMPTY');
   updateCart();
}

const checkOut = () => {
   let confirmMessage = `You have bought ${cartList.length} items: ` + '\n';
   let totalCost = 0;

   // create a list of bought items for confirmation 
   for (item of cartList) {
      confirmMessage += '\n     ' + item.title;
      let price = Number(item.price);
      // console.log(price, typeof(price));
      totalCost += price;
   }

   let purchaseCost = totalCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   confirmMessage += '\n\n' + `Total cost of your purchase is ${purchaseCost} €`;

   // redirect to the cart page
   let redirect = confirm(`${confirmMessage}`);
   redirect && window.location.replace('./cart.html');
}

// SAVE the data of bought items into local storage
const saveCart = () => {
   let cartListString = JSON.stringify(cartList);
   localStorage.setItem('myCart', cartListString);
}

// give FEEDBACK MESSAGES to user
const printInfoMessage = (itemName, action) => {
   let message = document.getElementById("messageField");
   message.classList.add("feedbackMessage");
   if (action === 'ADD') {
      message.innerHTML = `"${itemName}" has been added to your cart!`;
   } else if (action === 'REMOVE') {
      message.innerHTML = `"${itemName}" has been removed from your cart!`;
      message.classList.add("feedbackMessage");
   } else if (action === 'EMPTY') {
      message.innerHTML = `Your cart is empty!`;
   }
}