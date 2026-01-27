function sumFibs (num) {
  let result = 0;
  let previousNum = 0;
  let currentNum = 1;

  while (currentNum <= num) {
    if (currentNum % 2 === 0) {
        result += currentNum;
    }
    else {
      previousNum += result;
      currentNum += previousNum;
    }
  }
  return result;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));