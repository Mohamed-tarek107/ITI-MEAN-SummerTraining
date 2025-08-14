let products = require("./productsdata.json");
const express = require("express");
const app = express(); //server=creatServer
app.use(express.json());



// task make apis that match:
// ->update single product
// ->update all products with category==Mobiles make them Electronics (from Mobiles to Electronics)
// ->delete all products

app.put("/updateOne/:id", (req,res) => {
  let id = +req.params.id // ba7awel lrakam 
  let product = products.find((prod) => prod.id == id)

  if(product){
    let body = req.body;  //b recive el body
    Object.assign(product, body) // merging
    res.json(product);
    console.log(product)
  }else{
    res.status(404).send('Product not found') // bydelo 404 badl ma ab3t not found w khalas
  }
})

app.put("/updateAllCategory", (req,res) => {
    products.forEach((prod) => {
      if(prod.category == "Mobiles"){
        prod.category = "Electronics"
      }
    });
    res.json(products)
    console.log(products)
  })


app.delete("/deleteAll", (req,res) => {
  products.splice(0, products.length)
  res.end('Products deleted')
})


app.listen(3000, () => {
  console.log("server connected");
});