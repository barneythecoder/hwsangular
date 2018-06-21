const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Product Schema
const ProductSchema = mongoose.Schema({
    name:{
        type: String
    },
    price:{
        type: Number,
        required: true

    },
    description:{
        type: String,
    },
    brand:{
        type: String,
    },
    spec1:{
        type: String,
    },
    spec2:{
        type: String,
    },
    spec3:{
        type: String,
    },
    stock:{
        type: Number,
    },
    category:{
        type: String,
    },
    prodType:{
        type: String,
    }
});

const Product = module.exports = mongoose.model('products', ProductSchema, 'products');

module.exports.getProductById = function(id, callback){ 
    Product.findById(id, callback);
}

module.exports.getProductByName = function(name, callback){
    const query = {name: name};
    Product.findOne(query, callback);
}

module.exports.getAllProductsByCategory = function(category, callback){
    const query = {category: category};
    Product.find(query).select('name').exec(callback);
}
module.exports.addProduct = function(newProduct, callback){    
    newProduct.save(callback);        
}
