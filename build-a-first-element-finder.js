function findElement(arr,func) {
  for (let i = 0; i < arr.length; i++) {
    let checkedElement = arr[i];
    if (func(checkedElement)) {
      return checkedElement;
    }
  }
  return undefined;
}