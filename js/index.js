document.querySelector('.guitar').addEventListener('click',getProducts)
async function getProducts() {
    const response = await fetch('products.json')
    products = await response.json();
    document.querySelector('.products-container').innerHTML = products;

}

/*function showProducts(category) {
    let productsHtml = '';

      .filter( product => category ? product.category === category : true
       )
      .forEach(product => {
        productsHtml += `<div>${product.title}</div>`
      })
    document.querySelector('.products-container').innerHTML = productsHtml;
  }
  
  document.querySelector('.guitar').addEventListener('click', () => showProducts('guitar') );
  document.querySelector('.drums').addEventListener('click', () => showProducts('drums') );
  document.querySelector('.keyboard').addEventListener('click', () => showProducts('keyboard') );
  document.querySelector('.wind').addEventListener('click', () => showProducts('wind') );
  document.querySelector('.string').addEventListener('click', () => showProducts('string') );
  document.querySelector('.equip').addEventListener('click', () => showProducts('equipment') );

  
  showProducts();*/
