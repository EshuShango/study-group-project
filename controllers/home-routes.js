const router = require("express").Router();
const { User, Chat, Resource, GroupUser, Group } = require('../models');

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/login', async (req, res) => {
  res.render('login', {});
});

router.get('/resources', async (req, res) => {
  try {
      const resourceData = await Resource.findAll();
      const groupUserData = await GroupUser.findAll();
      const bruh = resourceData.map((data) => data.get({ plain: true }));
      const gu = groupUserData.map((gudata) => gudata.get({ plain: true }));
      res.render('resources', { bruh, gu });
  }
  catch (err) {
      res.status(500).json(err);
  }
});

router.get("/videoroom", async (req, res) => {
  try {
      res.render("videochat");
  }
  catch (err) {
      res.status(500).json(err);
  }
})

module.exports = router;