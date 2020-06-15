class ProductsService {
    constructor() {
        if (!ProductsService._instance) ProductsService._instance = this;
        return ProductsService._instance;
    }
    async getProducts() {
        if (!this.products) {
            const response =await fetch('products.json');
            const data = await response.json();
            this.products = data;
        }
        return this.products;
    }
    async getProductById(id) {
        const products = await this.getProducts();
        return products.find( product => product.id === id );
    }
    async showProducts(category) {
        let productsHtml = '';
        await this.products
          .filter( product => category ? product.category === category : true )
        document.querySelector('.products-container').innerHTML = productsHtml;
      }
}
document.querySelector('.guitar').addEventListener('click', () => showProducts('guitar') );
  document.querySelector('.drums').addEventListener('click', () => showProducts('drums') );
  document.querySelector('.keyboard').addEventListener('click', () => showProducts('keyboard') );
  document.querySelector('.wind').addEventListener('click', () => showProducts('wind') );
  document.querySelector('.string').addEventListener('click', () => showProducts('string') );
  document.querySelector('.equip').addEventListener('click', () => showProducts('equipment') );

  showProducts();

