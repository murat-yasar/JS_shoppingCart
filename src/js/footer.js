let footerData =
[{
   author: 'Murat Yaşar',
   date: '22.12.2022',
   email: 'memluk@gmail.com',
   legalRights: 'Copyright © 2022 MY-Dev. All Rights Reserved'
}];

/* 
   First Method:

   const listFooter = (author, date, email, legal) => {
   let el = dom.create(false, elements.footer, 'div', 'footerDiv');
      let authorEl = dom.create(author, el, 'p');
      let dateEl = dom.create(date, el, 'p');
      let emailEl = dom.create(email, el, 'a');
      emailEl.href = `mailto:${email}`;
      let legalEl = dom.create(legal, el, 'p');
}

const initFooter = () => {

   footerData.map((item) => {
      listFooter(
         item.author,
         item.date, 
         item.email, 
         item.legalRights, 
      );
   });
}
*/

/* 
   Second Method:

   const initFooter = () => {
   let footDiv = dom.create(false, elements.footer, 'div', 'footerDiv');
   footerData.forEach((item) => {
      let author = dom.create(item.author, footDiv, 'p');
      let date = dom.create(item.date, footDiv, 'p');
      let email = dom.create(item.email, footDiv, 'a');
      email.href = `mailto:${item.email}`;
      let legalRights = dom.create(item.legalRights, footDiv, 'p');
   });
}
*/


/* 
   Third Method:  Writting in HTML :)
*/