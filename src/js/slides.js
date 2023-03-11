// create three small images from product list
const createSlide = (index, url, title) => {
   let el = dom.create(false, elements.slides, 'div', 'imgDiv');
   let elImg = dom.create(title, el, 'img', 'slideImg');
   let text = dom.create(title, el, 'p', 'imgText');
   elImg.src = `${url}`;
   el.addEventListener('click', () => getSlides(index));
}

const toNextSlide = () => {
   if (frameIndex+1 > products.length-1) {
      frameIndex = 0;
      getSlides(0)
   } else getSlides(++frameIndex);
}
const toPrevSlide = () => {
   if (frameIndex-1 < 0) {
      frameIndex = products.length-1;
      getSlides(products.length-1)
   } else getSlides(--frameIndex);
}

// initialize first three slides at the top
const getSlides = (index=frameIndex) => {
   elements.slides.innerHTML = '';
   let slides = [];
   let indexArray = [];

   frameIndex = index;

   (index-1 < 0) ? indexArray[0] = products.length-1: indexArray[0] = index-1;
   indexArray[1] = index;
   (index+1 > products.length-1) ? indexArray[2] = 0: indexArray[2] = index+1;

   let url = products[index].imgURL;

   indexArray.forEach(element => {
      slides.push(products[element]);
   });
   
   createMainFrame(index, url);

   slides.map((item)=>{
      createSlide(products.indexOf(item), item.imgURL, item.productName);
   });
}