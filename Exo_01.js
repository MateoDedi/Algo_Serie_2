function possibleBonus(pos1, pos2) {
    let difference = pos2 - pos1;
    if (pos1 > 0 && pos2 > 0 && pos1 < pos2 && difference >= 1 && difference <= 6) {
        return true;
    } else {
        return false;
    }
}
console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));
console.log(possibleBonus(-1, 3));
console.log(possibleBonus(1000, 1007));



