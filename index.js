function disemvowel(str) {
    let regex = /[aeiou]/gi;
    return str.replace(regex, "");
}

console.log(disemvowel("This website is for losers LOL!"));