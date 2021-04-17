/*

// Goes to 4-names.js
const SECRET = 'SUPER SECRET'
const JOHN = 'john'
const PETER = 'peter'

// Goes to 5-utils.js
const sayHi = (name) => {
    console.log (`Hello there ${name}`)
}

sayHi('susan')
sayHi(JOHN);
sayHi(PETER);

*/

const names = require('./4-names');
console.log(names)

const sayHi = require('./5-utils')
console.log(sayHi)

sayHi('susan')
sayHi(names.JOHN);
sayHi(names.PETER);

const data = require('./6-alternative-favour')
console.log(data);

// execute the 'addValue()' line in the mind-grande.js
require('./7-mind-grande')
