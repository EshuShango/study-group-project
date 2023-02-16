const router = require('express').Router();
const { Group } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const groupData = await Group.findAll();

        console.log(groupData);

        const groups = groupData.map((group) => group.get({ plain: true }));

        console.log(groups);

        res.render('chatroom', {
            groups,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;