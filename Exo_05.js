function removeLeadingTrailing(n) {

    const number = parseFloat(n);       // Convert the input string to a number to remove trailing .0
    

    const result = number.toString();   // Convert the number back to a string to handle leading zeros
    
    return result;
    }

    
    console.log(removeLeadingTrailing("230.000"));
    console.log(removeLeadingTrailing("00402"));
    console.log(removeLeadingTrailing("03.1400"));
    console.log(removeLeadingTrailing("30"));
    console.log(removeLeadingTrailing("0.0"));
    console.log(removeLeadingTrailing("000"));
    console.log(removeLeadingTrailing("00.00"));