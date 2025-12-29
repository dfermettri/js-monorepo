function fearNotLetter (str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let firstLetter = str[0];
  let index = alphabet.indexOf(firstLetter);
  for (i = 0; i < str.length; i++) {
    if ( str[i] !== alphabet[index+i]) {
        return alphabet[index+i];
    }
  }
  return
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));