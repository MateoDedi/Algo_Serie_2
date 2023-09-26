function toArray(a) {
    newArr = [];

    for (const key in a) {
        if (a.hasOwnProperty(key)) {
            newArr.push([key, a[key]]);
        }
    }
    return newArr;
}

console.log(toArray({a: 1, b: 2}));
console.log(toArray({shrimp: 15, tots: 12}));
console.log(toArray({}));