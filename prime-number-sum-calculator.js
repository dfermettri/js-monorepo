function sumPrimes (num) {
    let sumNumbers = 0;


    function isPrime (verifiedNum) {
        for (let i = 2; i <= verifiedNum - 1; i++) {
            if (verifiedNum % i === 0) {
                return false
            }
        }
            return true;
    }


    for (let numbers = 2; numbers <= num; numbers++) {
        if (isPrime(numbers)) {
            sumNumbers += numbers;
        }
    }
    return sumNumbers;
}



console.log(sumPrimes(10))
console.log(sumPrimes(5))
console.log(sumPrimes(2))
console.log(sumPrimes(0))
console.log(sumPrimes(977))