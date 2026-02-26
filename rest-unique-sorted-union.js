function uniteUnique (...arrs) {
  let uniqueArr = [];
  for (const arr of arrs) {
    for (let index = 0; index < arr.length; index++) {
      if (uniqueArr.includes(arr[index])) {
        continue;
      }
      uniqueArr.push(arr[index]);
    }
  }
  return uniqueArr;
}


//tests
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]))
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))