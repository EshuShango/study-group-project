const router = require("express").Router();
const userRoutes = require("./user-routes");
const resourceRoutes = require("./resource-routes");
const groupRoutes = require("./group-routes");


router.use("/user", userRoutes);
router.use("/resource", resourceRoutes);
router.use("/group", groupRoutes);



module.exports = router;