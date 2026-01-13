function frankenSplice(arr,anotherArr,index) {
  let result = anotherArr.slice(0,index);
  result = result.concat(arr);
  result = result.concat(anotherArr.slice(index));
  return result;
}

//проверки
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
//должен вернуть [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1));
//должен вернуть ["a", 1, 2, "b"] 
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
//должен вернуть ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
console.log(frankenSplice([1, 2, 3, 4], [], 0));
//должен вернуть [1, 2, 3, 4]