const express = require('express')
let products = require("./productsdata.json");

const server = express(); //by3ml server == createserver() in node


server.get("/products", (req,res) => {
    res.send(products)
})

server.get('/products/:id', (req,res) => {
    let id = +req.params.id
    let product = products.find((prod) => prod.id == id);
    if(product){
        res.send(product)
    }else{
        res.send('no product found')
    }
})
// query string
//  ?key=value

server.listen(3000, () => {
    console.log('server connected')
})

