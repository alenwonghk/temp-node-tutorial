const fss = require('fs');
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

// folder need to be there or an error will be thrown
writeFileSync('./content/result-sync.txt',`\nHere is the result : ${first}, ${second}`, 
              {flag: 'a'});   // append