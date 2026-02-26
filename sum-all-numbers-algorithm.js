function sumAll ([n, m]) {
    let result = 0;
    let start = Math.min(n, m);
    let finish = Math.max(n, m);

  for (let index = start; index <= finish; index++) {
    result += index;
  }
  return result;
}


// tests
console.log(sumAll([1, 4]));
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));