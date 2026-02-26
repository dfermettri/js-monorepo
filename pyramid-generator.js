function pyramid (str,num,boo) {
  let result = ""
  for (let i = 0; i <= num; i++) { //перебираю колличество рядов
    for (let x = num.legth; x > 0; x--) { //добавляю в ряд пробелы
      return result += result + " "
    }
    for (let y = 0; y <= i.length; y++) { //добавляю в ряд символы
      return result += result + str;
    }
  }
}

console.log(pyramid("o", 4, false))
console.log(pyramid("p", 5, true))