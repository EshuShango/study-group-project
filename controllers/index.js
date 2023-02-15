const router = require("express").Router();
const apiRoutes = require("./api");
const { User, Chat, Resource, GroupUser, Group } = require('../models');
const videochatroutes = require("./video-chat-routes");

router.use("/", videochatroutes)

router.use("/api", apiRoutes);

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/login', async (req, res) => {
    res.render('login', {});
});

router.get("/resources", async (req, res) => {
    try {
        const resourceData = await Resource.findAll();
    
        var bruh = resourceData.map((data) => data.get({plain:true}));
    
        res.render("resources", {bruh});
      }
      catch (err) {
        res.status(500).json(err);
      }
});

router.get("/videoroom", async (req,res) => {
    try {
        res.render("videochat");
    }
    catch (err){
        res.status(500).json(err);
    }
})


module.exports = router;