function reverseWords(a) {
    const words = a.split(/\s+/);
    const filter = words.filter(word => word !== '')
    const rev = filter.reverse();
    const revString = rev.join(' ');

    return revString;
}

console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  "));
console.log(reverseWords("a good example"));