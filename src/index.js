/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const urlBase = 'https://platzi-avo.vercel.app/';
const appNode =  document.querySelector('#app')

//api de internacionalizacion
const formatPrice = (price) => {
     return new window.Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
    }).format(price);

}

//web api
//conectarnos al servidor
window
  .fetch(`${urlBase}api/avo`)
  // procesar la respuesta y convertirla en Json
  .then((response) => response.json())
  //Json --> data  ..> renderizar en el browser
  .then((responseJson) => {
    const todos = [];
    responseJson.data.forEach((item) => {


      const image = document.createElement('img');
      image.src = urlBase+item.image;


      const title = document.createElement('h2');
      title.className = 'text-md font-light text-center text-orange-600';
      title.textContent = item.name;


      const price = document.createElement('div');
      price.className = 'mt-4 text-md italic text-center text-gray-800';
      price.textContent = formatPrice(item.price);



      const container = document.createElement('article');
      container.append(image,title,price)

      todos.push(container);
    });
    appNode.append(...todos);
  });

