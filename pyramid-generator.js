function pyramid (str,num,boo) {
  let result = ""

  if (boo == false) { //обычная пирамида, расширяется к основанию
    result += "\n"
    for (let i = 0; i <= num - 1; i++) { //перебираю кол-во рядов
      for (let y = 0; y < num - i - 1; y++) { //добавляю пробелы
        result += " ";
      }
      for (let x = 0; x < 2 * i + 1; x++) { //добавляю символы
        result += str;
      }
      result += "\n";
    }
  }
  else { //перевернутая пирамида
    result += "\n"
    for (let i = num - 1; i >= 0; i--) { //перебираю кол-во рядов
      for (let y = 0; y < num - i - 1; y++) { //добавляю пробелы
        result += " ";
      }
      for (let x = 0; x < 2 * i + 1; x++) { //добавляю символы
        result += str;
      }
      result += "\n";
    }

  }
  return result;
}

console.log(pyramid("o", 4, false))
console.log( pyramid("p", 5, true))
