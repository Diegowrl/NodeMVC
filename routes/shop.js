const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require('../controllers/productsController')

router.get("/",productController.getProducts);
  
module.exports = router;