function areaOfCountry(country, area) {
    const earthLandMass = 148940000;
    const calc = (area / earthLandMass) * 100;
    const roundCalc = calc.toFixed(2);

    return `${country} is ${roundCalc}% of the total world's landmass`;
}

console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Iran", 1648195));
