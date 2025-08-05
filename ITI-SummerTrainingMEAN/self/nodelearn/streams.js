//make big file to be handled by streams

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt')

stream.on('data', (result) =>{
    console.log(result) //read in
})