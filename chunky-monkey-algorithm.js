function chunkArrayInGroups (array , num) {
    let countArray = [];
    for (i = 0; i < array.length; i += num) {
    countArray = array.slice(i,i+num)
}
    return countArray;
}