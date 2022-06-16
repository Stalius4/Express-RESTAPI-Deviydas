const { Router } = require('express');

const productRouter = Router();

productRouter.get('/', (req, res) => {
    //get all products
});

//http://localhost:5001/products/:id
productRouter.get('/:id', (req, res) => {
    //get one product by id
})

//https://fakestoreapi.com/products/14


