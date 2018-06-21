const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const config = require('../config/database');

router.post('/addproduct', (req, res, next)=>{
    let newProduct = Product({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        brand:req.body.brand,
        spec1:req.body.sep1,
        spec2:req.body.sep2,
        spec3:req.body.sep3,
        stock:req.body.stock,
        category:req.body.category,
        prodType:req.body.prodType

    });

    Product.addProduct(newProduct, (err, product)=>{
        if(err){
            res.json({success:false, msg:'Failed to add'});            
        }
        else{
            res.json({success: true, msg:'Product added'});
        }
    });
});

router.post('/getallproductsbycategory',(req, res ,next)=>{
    const category = req.body.category;
    console.log(category);

    Product.getAllProductsByCategory(category, (err, product)=>{
        if(err)throw error;

        if(!product){
            return res.json({msg: "no items"});
        }
        console.log(product);
        res.json(product);
    });
});

module.exports = router; 