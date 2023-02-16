const router = require("express").Router();
const { User, Chat, Resource, GroupUser, Group } = require('../models');

router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in
  });
});

router.get('/login', async (req, res) => {
  res.render('login', {});
});

router.get('/resources/:id', async (req, res) => {
  try {
    const resourceData = await Resource.findAll({
      where:
        {
          group_id: req.params.id
        },
      include: [
        {
          model: User,
          required: false
        }
      ]
    });
    console.log("------------anything---------------")
    const groupData = await Group.findByPk(req.params.id,
      {
        include: [
          {
            model: User,
            as: "users_groups",
            required: false
          }
        ]
      });
    console.log("------------more anythings---------------")
    const bruh = resourceData.map((data) => data.get({ plain: true }));
    const group = groupData.get({ plain: true });
    res.render('resources', { bruh, group });
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

router.get('/chatroom', async (req, res) => {
  try {
    res.render('chatroom');
    // const chatLogs = await Chat.findAll();
    // res.status(200).json({chatLogs});
  }

  catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;