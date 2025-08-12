const http = require('http')
let products = require('./productsdata.json')

//api
//path.method
// /products
const server = http.createServer((req,res) => {
    if(req.url == '/products' && req.method == "GET") {
        // parse -> yakhod string yrg3 json
        // stringfy -> ya5od json yrg3 string
        res.end(JSON.stringify(products))
    }else if (req.method == "GET" && req.url.startsWith == "/product/") {
        res.end('hello from prod id')
    }
})

server.listen(3000,)