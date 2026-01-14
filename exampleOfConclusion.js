function multiply(x) {
    return function (y) {
        return x * y;
    };
}

let double = multiply(2);
console.log(double(5)); // 10

// пример замыкания в js