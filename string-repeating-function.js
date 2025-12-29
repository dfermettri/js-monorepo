function repeatStringNumTimes (str,num) {
  let emptyStr = '';
  if (num <= 0) {
      return ''
  }
  else {
    for (let i = 0; i < num; i++) {
    emptyStr += str;
    }
  }
  return emptyStr;
}