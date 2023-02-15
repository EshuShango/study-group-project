const router = require("express").Router();
const apiRoutes = require("./api");
const { User, Chat, Resource, GroupUser, Group } = require('../models');

router.use("/api", apiRoutes);

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/login', async (req, res) => {
    res.render('login', {});
});


//? router below is not need ???
// router.get('/chatroom', async (req, res) => {
//     res.render('chatroom')
// })


module.exports = router;