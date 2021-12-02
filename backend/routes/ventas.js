const express=require('express');
const router = express.Router();
const { createVentas,getVentasById,getVentas,updateVentasById,deleteVentasById } = require('../controllers/ventas');
const { protect, isAdmin } = require("../middleware/auth");

router.route("/").get( [protect, isAdmin],getVentas );
router.route("/:ventasId").get([protect, isAdmin],getVentasById);

router.route("/").post([protect], createVentas);

  router.route("/:ventasId").put([protect, isAdmin], updateVentasById);
  
  router.route("/:ventasId").delete([protect, isAdmin], deleteVentasById);
  


module.exports=router;