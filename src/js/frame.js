// list the detailed info of the item at the center
const createMainFrame = (index, url) => {
   elements.details.innerHTML = '';

   let el = dom.create(false, elements.details, 'div', 'infoDiv');
   let img = dom.create(false, el, 'img', 'mainImgDiv');
   let title = dom.create(products[index].productName, el, 'h2', 'infoHeader');
   let info = dom.create(false, el, 'p', 'productDetails');
   let price = dom.create(products[index].productPrice, el, 'h3', 'productPreis');

   let btnDiv = dom.create(false, el, 'div', 'btnDiv');
   let button = dom.create('Add to Cart', btnDiv, 'div', 'btnAdd');

   // assign product properties
   info.innerText = `
      ${products[index].productInfo.OS}
      ${products[index].productInfo.Processor}
      ${products[index].productInfo.Graphics}
      ${products[index].productInfo.Display}
      ${products[index].productInfo.Storage}
      ${products[index].productInfo.Memory}
   `;

   img.src = url;
   price.innerHTML = `<h3>${parseFloat(products[index].productPrice).toFixed(2)} €<h3/>`;

   button.addEventListener('click', () => addToCart(
      products[index].productId, 
      products[index].productName, 
      products[index].productPrice
   ));
}