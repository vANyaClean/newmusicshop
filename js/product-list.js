class ProductList {
    constructor(cart) {
      this.cart = cart;
      this.container = document.querySelector('.products-container');
      this.productService = new ProductsService();
      this.productService
        .getProducts()
        .then(() => this.renderProducts())
        .then(() => this.addEventListeners());    
    }
    async renderProducts(category = 'guitar') {
      let productListDomString = '';
      const products = await this.productService.getProducts();
      const filteredProducts = products.filter( product => category ? product.category === category : true );
      filteredProducts.forEach(product => {
        productListDomString += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="card product">
                      <img class="card-img-top" src="img/products/${product.image}" 
                          alt="${product.title}">
                      <div class="card-body d-flex flex-column">
                        <h4 class="card-title">${product.title}</h4>
                        <p class="card-text flex-fill">${product.description}</p>
                        <div class="d-flex justify-content-around">
                          <button class="btn btn-outline-danger info" data-toggle="modal"
                            data-target="#productInfoModal" data-id="${product.id}">Info
                          </button>
                          <button class="btn btn-outline-danger buy" data-id="${product.id}">
                            $${product.price} - Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>`;
      });
      this.container.innerHTML = productListDomString;
    }
    addEventListeners() {
      document
        .querySelectorAll('.product .btn.info')
        .forEach(button =>
          button.addEventListener('click', event =>
            this.handleProductInfoClick(event)
          )
        );
      document
        .querySelectorAll(
          '.card.product button.buy, #productInfoModal button.buy'
        )
        .forEach(button =>
          button.addEventListener('click', event =>
            this.handleProductBuyClick(event)
          )
        );
        document.querySelector('.guitar').addEventListener('click',() => this.renderProducts('guitar'))
        document.querySelector('.drums').addEventListener('click',() => this.renderProducts('drums'))
        document.querySelector('.keyboard').addEventListener('click',() => this.renderProducts('keyboard'))
        document.querySelector('.wind').addEventListener('click',() => this.renderProducts('wind'))
        document.querySelector('.string').addEventListener('click',() => this.renderProducts('string'))
        document.querySelector('.equip').addEventListener('click',() => this.renderProducts('equipment'))
    }
    async handleProductInfoClick(event) {
      const button = event.target; // Button that triggered the modal
      const id = button.dataset.id; // Extract info from data-* attributes
      const product = await this.productService.getProductById(id);
      const modal = document.querySelector('#productInfoModal');
      const productImg = modal.querySelector('.modal-body .card-img-top');
      productImg.setAttribute('src', 'img/products/' + product.image);
      productImg.setAttribute('alt', product.title);
      modal.querySelector('.modal-body .card-title').innerText = product.title;
      modal.querySelector('.modal-body .card-text').innerText =
        product.description;
      const btnBuy = modal.querySelector('button.buy');
      btnBuy.innerText = `${product.price} - Buy`;
      btnBuy.dataset.id = id;
    }
    handleProductBuyClick(event) {
      const button = event.target;
      const id = button.dataset.id;
      this.cart.addProduct(id);
      window.showAlert('Product added to cart');
    }
  }