/* First Method: */

// list all products in the main section
const listItems = (id, imgUrl, title, details, price) => {
   let el = dom.create(false, elements.main, 'div', 'item');
   let elImg = dom.create(false, el, 'img');
   let elTitle = dom.create(title, el, 'h2');
   let elInfo = dom.create(false, el, 'p', 'infoText');
   let elPrice = dom.create(false, el, 'h3');
   let button = dom.create('Add to Cart', el, 'div', 'btnAdd');

   // assign product properties
   elInfo.innerText = `
      ${details.OS}
      ${details.Processor}
      ${details.Graphics}
      ${details.Display}
      ${details.Storage}
      ${details.Memory}
   `;

   elImg.src = `${imgUrl}`;

   elPrice.innerHTML = `</br><h3>${price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} €<h3/>`;
   // elPrice.innerHTML = `</br><h3>${parseFloat(price).toFixed(2)} €<h3/>`;

   // Add event-listener
   button.addEventListener('click', () => addToCart(id, title, price));
}

// get all products from data.js in order to list them in .main
const getProducts = () => {
   products.map((item) => {
      listItems(
         item.productId,
         item.imgURL, 
         item.productName, 
         item.productInfo, 
         item.productPrice
      );
   });
}


/* Second Method: */
// const getProducts = () => {
//    products.forEach((item, i)=>{
//       let el = dom.create(false, elements.main, 'div', 'item');
//       let elImg = dom.create(false, el, 'img');
//       elImg.src = item.imgURL;
//       let elTitle = dom.create(item.productName, el, 'h2');
//       let elInfo = dom.create(false, el, 'p', 'infoText');
//       elInfo.innerText = `
//          ${item.productInfo.OS}
//          ${item.productInfo.Processor}
//          ${item.productInfo.Graphics}
//          ${item.productInfo.Display}
//          ${item.productInfo.Storage}
//          ${item.productInfo.Memory}
//       `;
//       let elPrice = dom.create(false, el, 'h3');
//       elPrice.innerHTML = `</br><h3>${item.productPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} €<h3/>`;
//       let button = dom.create('Add to Cart', el, 'div', 'btnAdd');
//       button.addEventListener('click', () => addToCart(item.productId, item.productName, item.productPrice));
//    });
// }