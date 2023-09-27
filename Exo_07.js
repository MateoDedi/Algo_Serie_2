function calculator (num1, oprt ,num2) {

    if (oprt === "+") {
        return num1 + num2;
    } else if (oprt === "-") {
        return num1 - num2;
    } else if (oprt === "*") {
        return num1 * num2;
    } else if (oprt === "/") {
        if (num1 == 0 || num2 == 0) {
            return "Can't divide by 0!"
        } else {
            return num1 / num2;
        }
    } else {
        return "Enter a valid operator";
    }
}

console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));