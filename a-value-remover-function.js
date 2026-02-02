function destroyer (arr, ...arg) {
    let filtredArr = arr
    .filter(function(el) {
        if (arg.includes(!el)) {
            return true;
        }
        else return false;
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
console.log(destroyer([2, 3, 2, 3], 2, 3))
console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
console.log(destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" ))