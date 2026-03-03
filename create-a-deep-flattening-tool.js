function streamrollArray (arr) {
    let result = [];
    for (let index = 0; arr.length >= index; index++) {
        let element = arr[index];
        if (Array.isArray(element)) {
            for (let elementInElement = 0; element.lenght >= elementInElement; elementsInElement++) {
                result.push(elementInElement)
            }
        }

        else {
            result.push(element);
        }
    }

    return result;
}


console.log(streamrollArray ([[1], [], [2, [3]]]));
console.log(streamrollArray ([1, {"foo": "bar"}, [2]]));
console.log(streamrollArray (["baz", [1, 2], {}]));