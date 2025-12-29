function mutation (array) {
  const firstStr = array[0].toLowerCase();
  const secondStr = array[1].toLowerCase();

  for (let letter of secondStr) {
    if (!firstStr.includes(letter)) {
      return false;
    }
  }
  return true;
}