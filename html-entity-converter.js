function convertHTML (str) {
    let result = "";
    const entityBase = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&apos;"
}
    for (let index = 0; index < str.length; index++) {
        if (entityBase.hasOwnProperty(`${str[index]}`)) {
            result += entityBase[str[index]];
        }
        else {
            result += str[index];
        }
    }
    return result;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));