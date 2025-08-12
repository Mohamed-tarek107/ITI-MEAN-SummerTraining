// import fileSys from 'fs';
// const fileSys = require("fs");
const http = require("http");
let products = require("./productsdata.json");
const { json } = require("stream/consumers");
//req->Request
//res->Response
// menu=APIs=EndPoints
// path,method
// /products ,GET
// /product/1 ,GET
// task
// update,delete

const server = http.createServer((req, res) => {
    if (req.url == "/products" && req.method == "GET") {
    res.end(JSON.stringify(products));
    } else if (req.method == "GET" && req.url.startsWith("/product/")) {
    let id = +req.url.split("/")[2];
    let product = products.find((item) => item.id == id);
    
    
    if (product) {
        res.end(JSON.stringify(product));
    } else {
        res.end("No Product Founded With this id");
    }



    } else if (req.method == "PUT" && req.url.startsWith("/updateProduct/")) { // el update
        let id = req.url.split("/")[2];
        let product = products.find((item) => item.id == id);
        if(product){
            let body = "";
            req.on("data", chunk => {
            body += chunk.toString();
        });
            req.on("end", () => {
                let updateddata = JSON.parse(body);
                Object.assign(product, updateddata);
                res.end(JSON.stringify(product));
                console.log(product)
            });
        } else {
            res.end('no products found');
        }



    } else if (req.method == "DELETE" && req.url.startsWith("/deleteProduct/")) {
        let id = req.url.split("/")[2];
        
        let index = products.findIndex((item) => item.id == id)
        if(index !== -1){
                products.splice(index,1);
                res.end("product deleted")
                console.log(products);
        }else{
            res.end("no product")
        }
    }

})


//localhost,portNumber

server.listen(3000, () => {
  console.log("Server Connected");
});

// fileSys.readFile("task.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// let data = `hello from Node js
// this is dummy text`;
// fileSys.writeFile("task2.txt", data, (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// }}