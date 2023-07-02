const { encrypt, decrypt } = require("./railfenceCiphter");
// h l o o l
// e l w r d

// h o l
// e l w r d
// l o
console.log(encrypt("helloworld", 3));
console.log(decrypt("holelwrdlo", 3));
