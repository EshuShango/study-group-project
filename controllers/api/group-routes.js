const router = require('express').Router();
const { Group } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const groupData = await Group.findAll();
    res.status(200).json(groupData);
  }
  catch (err) {
    res.status(500).json(err);
  }
  // res.render('studyGroup');
});

router.post('/', (req, res) => {
  // create a new resource
    Group.create(req.body)
    .then((groupData) => {
      res.status(200).json(groupData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a resource by its `id` value
    Group.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((groupData) => {
      res.status(200).json(groupData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a resource by its `id` value
  Group.destroy({
    where:{
      id: req.params.id
    }
  }).then(response=>res.status(200).json(response));
});

module.exports = router;