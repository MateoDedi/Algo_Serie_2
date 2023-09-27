function sortIt(array) {
    let arr = [array[0]];
    for (let i = 1; i < array.length; i++) {
        let inserted = false;
        for (let j = 0; j < arr.length; j++) {
            if (array[i] < arr[j]) {
                arr.splice(j, 0, array[i]);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            arr.push(array[i]);
        }
    }
    return arr;
}

console.log(sortIt([4, 1, 3]));
console.log(sortIt([4, [1], 3]));
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([[4], 1, [3]]));
console.log(sortIt([[3], 4, [2], [5], 1, 6]));