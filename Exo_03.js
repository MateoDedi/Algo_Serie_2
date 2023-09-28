function toArray(a) {
    newArr = [];

    for (const keyObj in a) {
        if (a.hasOwnProperty(keyObj)) {
            newArr.push([keyObj, a[keyObj]]);
        }
    }
    return newArr;
}

console.log(toArray({a: 1, b: 2}));
console.log(toArray({shrimp: 15, tots: 12}));
console.log(toArray({}));