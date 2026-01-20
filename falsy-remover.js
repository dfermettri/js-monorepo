// удаление из массива false, 0, "", null, undefined, NaN

function bouncer (arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

// проверки
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([]));