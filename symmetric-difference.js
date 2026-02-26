function diffArray (arr,anotherArr) {
    let newArray = arr.concat(anotherArr);
    let uniqElements = [];
    newArray.filter(function(el) {
        let firstCheck = arr.includes(el)
        let secondCheck = anotherArr.includes(el)
        if (firstCheck && !secondCheck || secondCheck && !firstCheck)
            uniqElements.push(el);
        });
    return uniqElements;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]))
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]))
console.log(diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]))
console.log(diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]))
console.log(diffArray([], ["apple", "banana"]))
console.log(diffArray(["apple", "banana"], []))
console.log(diffArray([], []))