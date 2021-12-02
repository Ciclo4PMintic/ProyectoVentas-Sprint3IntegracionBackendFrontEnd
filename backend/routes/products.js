const express=require('express');
const router = express.Router();
const { createProduct,getProducts,getProductById,updateProductById,deleteProductById } = require('../controllers/products');
const { protect, isModerator, isAdmin } = require("../middleware/auth");

router.route("/").get( protect, getProducts);
router.route("/:productId").get(protect, getProductById);

router.route("/").post([protect,isAdmin], createProduct);

  router.route("/:productId").put([protect,isAdmin], updateProductById);
  
  router.route("/:productId").delete([protect,isAdmin], deleteProductById);
  


module.exports=router;