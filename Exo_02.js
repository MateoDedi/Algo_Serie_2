function numDigits(a) {
  /* 
    let count = 0;
    if (typeof a === 'number') {
        let str = a.toString();
        for (var i = 0; i < str.length; i++) {
        }
    } else {
        return "Not a number...";
    }

    return count += i;
*/

    // Another way

  if (typeof a === "number") {
    return Math.abs(a).length;
    } else {
    return "Not a number...";
  }
}

console.log(numDigits(1000));
console.log(numDigits(12));
console.log(numDigits(1305981031));
console.log(numDigits(0));
console.log(numDigits("lol"));
console.log(numDigits());
