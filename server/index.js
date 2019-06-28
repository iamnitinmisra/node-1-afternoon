const express = require('express');
const products = require('../products.json')
const getProducts = require('./getProducts')

const app = express();

const port = 3001;

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProducts)

app.listen(port, ()=>{
    console.log(`Server listening on port: ${port}`)
})


