function largestOfAll(arrays) {
  let result = [];
  for (let i = 0; i < arrays.length; i++) {
    let subArray = arrays[i]
    let getLargestNumber = Math.max(...subArray);
    result.push(getLargestNumber);
  }
  return result
}