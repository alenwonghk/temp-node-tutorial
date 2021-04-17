const { readFile, writeFile} = require('fs');

console.log('11-fs-async.js start')

readFile('./content/first.txt', 'utf8' , (err, result) => {
    if (err) {
        console.log(err)
        return 
    }
    const first = result;

    readFile('./content/second.txt','utf8', (err, result) => {
        if (err) {
            console.log(err)
            return 
        }
        const second = result;
        
        writeFile('./content/result-async.txt', 
                    `Here is the result : ${first}, ${second} \n`,
                    {flag: 'a'},
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            return
                        }
                        console.log('read first & second file and wrote file');
                    })
    })
})

console.log('11-fs-async.js end - should appear as 3rd line if sync | 2nd line if async');