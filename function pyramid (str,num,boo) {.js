function pyramid (str,num,boo) {
  let result = ""
  for (let i = 0; i <= num; i++) {
    for (let x = num.legth; x > 0; x--) {
      return result += result + " "
    }
    for (let y = 0; y <= i.length; y++) {
      return result += result + str + "\n";
    }
  }
}

console.log(pyramid("o", 4, false))
console.log( pyramid("p", 5, true)) 