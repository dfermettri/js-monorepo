function findLongestWordLength (str) {
  const words = str.split(" ");
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord.length;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));