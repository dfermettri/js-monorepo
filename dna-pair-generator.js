function pairElement (str) {
    const  pairs = {A : "T", T : "A", C : "G", G :"C"};
  let resultArr = []; 
  for (let index = 0; index < str.length; index++) {
    if (pairs.hasOwnProperty(str[index])) {
        resultArr.push([str[index], pairs[str[index]]]);
    }
  }
  return resultArr;
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));