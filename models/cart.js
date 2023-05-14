const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart data
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      // Analyze the cart => Find existing product
      const existingProduct = cart.products.find((prod) => prod.id === id);
      let updatedProduct;

      // Add new product/increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.totalPrice += +productPrice;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
        cart.totalPrice += +productPrice;
      }

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
};
