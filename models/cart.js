"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var cartItemSchema = new mongoose.Schema({
    productName: String,
    price: Number
});
var shoppingCartSchema = new mongoose.Schema({
    username: String,
    items: [cartItemSchema]
});
