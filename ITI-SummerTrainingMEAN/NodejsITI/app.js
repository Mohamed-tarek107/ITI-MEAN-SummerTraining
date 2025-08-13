const express = require('express')

const server = express(); //by3ml server == createserver() in node

server.listen(3000, () => {
    console.log('server connected')
})



