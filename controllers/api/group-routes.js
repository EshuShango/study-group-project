const router = require('express').Router();
const { Group } = require('../../models');


router.post('/', async (req, res) => {
  try {
      const groupData = await Group.create(req.body);
      res.status(200).json(groupData);
  } catch (err) {
      res.status(400).json(err);
  };
});

module.exports = router;