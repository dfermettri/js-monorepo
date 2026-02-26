function generatePassword (passLength) {
let result = "";
let symbolBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
for (let index = 0; index < passLength; index++) {
    let randomNum = Math.floor(Math.random() * (symbolBase.length));
    if (result.includes(passLength[index])) {
        continue
    }
    result += symbolBase[randomNum];
}
return result
}

let password = generatePassword(10);
console.log(`Generated password: ${password}`);