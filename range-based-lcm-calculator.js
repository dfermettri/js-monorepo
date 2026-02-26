function smallestCommons ([num , otherNum]) {
    let minNum = Math.min (num , otherNum);
    let maxNum = Math.max (num , otherNum);
    let result = minNum;

    
    function gcd(a, b) {
        while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
        }
    return a;
    }


    function lcm(a, b) {
        return Math.abs(a * b) / gcd(a, b);
    }


    for (let i = minNum + 1; i <= maxNum; i++) {
        result = lcm(result, i)
    }


    return result;
}


console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));