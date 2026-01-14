function reverseString(str) {
  let getArray = Array.from(str);
  let reversedArray = getArray.reverse();
  let reversedString = reversedArray.join("");
  return reversedString;
}

// Упрощение (цепочка методов)

function reverseString(str) {
  return Array.from(str).reverse().join("");
}