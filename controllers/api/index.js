const router = require("express").Router();
const userRoutes = require("./user-routes");
const resourceRoutes = require("./resource-routes");
const groupRoutes = require("./group-routes");
const chatRoutes = require("./chat-routes");
const groupUserRoutes = require("./group-user-routes");

router.use("/user", userRoutes);
router.use("/resource", resourceRoutes);
router.use("/group", groupRoutes);
router.use("/chat", chatRoutes);
router.use("/group-user", groupUserRoutes);


module.exports = router;