function frankenSplice(arr,anotherArr,index) {
  let result = anotherArr.slice(0,index);
  result = result.concat(arr);
  result = result.concat(anotherArr.slice(index));
  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));