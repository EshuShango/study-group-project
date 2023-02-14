const router = require("express").Router();
const apiRoutes = require("./api");
const { User, Chat, Resource, GroupUser, StudyGroup } = require('../models');

router.use("/api", apiRoutes);

router.get('/', async (req, res) => {
    res.render('homepage');
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
})

module.exports = router;