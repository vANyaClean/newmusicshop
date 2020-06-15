function showProducts(category) {
    products
      .filter( product => category ? product.category === category : true )
    document.querySelector('.products-container').innerHTML = productsHtml;
  }
  
  document.querySelector('.guitar').addEventListener('click', () => showProducts('guitar') );
  document.querySelector('.drums').addEventListener('click', () => showProducts('drums') );
  document.querySelector('.keyboard').addEventListener('click', () => showProducts('keyboard') );
  document.querySelector('.wind').addEventListener('click', () => showProducts('wind') );
  document.querySelector('.string').addEventListener('click', () => showProducts('string') );
  document.querySelector('.equip').addEventListener('click', () => showProducts('equipment') );
  
  showProducts();