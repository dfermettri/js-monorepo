//Начальный инвентарь (массив обьектов)

let inventory = [];

// Находит в массиве индекс товара по имени (игнорируя регистр);

function findProductIndex (productName) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() == productName.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

//Добавляет товар в инвентарь
// или обновляет количество если он уже есть;
function addProduct (productObj) {
  productObj.name = productObj.name.toLowerCase()

  let index = findProductIndex(productObj.name);
  if (index !== -1) {
    inventory[index].quantity += productObj.quantity;
    return `${productObj.name} quantity updated`;
  }
  else {
    inventory.push(productObj)
    return `${productObj.name} added to inventory`;
  }
}

//Уменьшает количество товара,
//либо удаляет его полностью,
//либо выводит сообщение об ошибке;
function removeProduct (productName, quantity) {
  productName = productName.toLowerCase();
  let index = findProductIndex(productName);
  
  if (index === -1) {
    return `${productName} not found`;
  }
  else if (quantity > inventory[index].quantity) {
    return `Not enough ${productName} available, remaining pieces: ${inventory[index].quantity}`;
  }
  else {
    let remaining = inventory[index].quantity -= quantity;

    if (inventory[index].quantity == 0) {
      inventory.splice(index, 1);
    }
    return `Remaining ${productName} pieces: ${remaining}`;
  }  
}

//тесты
console.log(findProductIndex("flour"))
console.log(findProductIndex("FloUr"))
console.log(findProductIndex("Flour"))
console.log(addProduct({name: "FLOUR", quantity: 5}))
console.log(removeProduct("FLOUR", 5))
console.log(removeProduct("FLOUR", 10))