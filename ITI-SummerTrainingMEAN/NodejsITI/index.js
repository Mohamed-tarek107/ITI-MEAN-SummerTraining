const http = require("http");
let products = require("./productsdata.json");


// task
// update,delete

const server = http.createServer((req, res) => {
    
// ----------------------TASK-----------------------------------

    if (req.method == "PUT" && req.url.startsWith("/updateProduct/")) { // el update
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



    } else if (req.method == "DELETE" && req.url.startsWith("/deleteProduct/")) { //el delete
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