function steamrollArray (arr) {
    let result = [];
    for (let index = 0; arr.length > index; index++) {
        let element = arr[index];
        if (Array.isArray(element)) {
            result = result.concat(steamrollArray(element))
        }

        else {
            result.push(element);
        }
    }

    return result;
}


console.log(steamrollArray ([[1], [], [2, [3]]]));
console.log(steamrollArray ([1, {"foo": "bar"}, [2]]));
console.log(steamrollArray (["baz", [1, 2], {}]));