const router = require("express").Router();
const { Resource, GroupUser } = require("../../models");

router.get('/', async (req, res) => {
  try {
    const resourceData = await Resource.findAll();
    const groupUserData = await GroupUser.findAll();
    const bruh = resourceData.map((data) => data.get({plain:true}));
    const gu = groupUserData.map((gudata) => gudata.get({plain:true}));
    res.status(200).json({bruh,gu});
  }
  catch (err) {
    res.status(500).json(err);
  }
  
});

router.post('/', (req, res) => {
  // create a new resource
    Resource.create(req.body)
    .then((resourceData) => {
      res.status(200).json(resourceData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a resource by its `id` value
    Resource.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((resourceData) => {
      res.status(200).json(resourceData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a resource by its `id` value
  Resource.destroy({
    where:{
      id: req.params.id
    }
  }).then(response=>res.status(200).json(response));
});

module.exports = router;