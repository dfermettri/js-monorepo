let inventory = [];
function findProductIndex (productName) {
  if(inventory.name == productName) {
    return inventory.quanity;
  }
  else return -1;
}

function addProduct (product) {
  if (product.name == inventory.name) {
    product.name = product.name.toLowerCase();
    inventory.quantity += product.quantity;
    return `${product} quantity updated.`
  }
  else {
    inventory.push(product)
    return `${product} added to inventory.`
  }
}

function removeProduct () {

}