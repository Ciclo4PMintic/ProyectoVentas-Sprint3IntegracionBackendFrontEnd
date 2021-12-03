const express=require('express');
const router = express.Router();
const { createProject,getProjectById,getProjects,updateProjectById,deleteProjectById } = require('../controllers/project')
const { protect, isAdminorLeader } = require("../middleware/auth");

router.route("/").get( [protect, isAdminorLeader],getProjects );
router.route("/:projectId").get([protect, isAdminorLeader],getProjectById);

router.route("/").post([protect,isAdminorLeader], createProject);

router.route("/:projectId").put([protect, isAdminorLeader], updateProjectById);
  
router.route("/:projectId").delete([protect,isAdminorLeader ], deleteProjectById);
  


module.exports=router;