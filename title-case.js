function titleCase (str) {
  let arr = str.trim().split(" "); //в строке убираю пробелы перед и после 
  // разбиваю на массив слов по пробелам
  
  for (let i = 0; i < arr.length; i++) { // Перебираю слова в строке
    arr[i] = arr[i].toLowerCase();
    
    let firstLetter = arr[i].slice(0, 1).toUpperCase(); // Делаю первую букву заглавной
    let otherLetters = arr[i].slice(1); // Вырезаю остальную часть слова
    
    arr[i] = firstLetter + otherLetters; // Склеиваю части слова
  }
  
  return arr.join(" "); // Возвращаю слова из массива в виде строки
}

// проверки
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));