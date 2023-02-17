const router = require("express").Router();
const apiRoutes = require("./api");
const videochatroutes = require("./video-chat-routes");
const homeroutes = require("./home-routes");

router.use("/", videochatroutes)
router.use("/", homeroutes)

router.use("/api", apiRoutes);


module.exports = router;