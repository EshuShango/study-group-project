const router = require("express").Router();
const apiRoutes = require("./api");
const { User, Chat, Resource, GroupUser, StudyGroup } = require('../models');

router.use("/api", apiRoutes);

router.get('/', async (req, res) => {
    res.render('homepage');
});

module.exports = router;