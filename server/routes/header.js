const router = require('express').Router();
const headerService = require('../services/headerService');

router.get('/', async (req,res) => {
    try {
        const users = await headerService.findUser()
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }

});


router.post("/create", async (req, res) => {
    const data = {...req.body};
    try {
      const header = await headerService.create(data);
      console.log(header);
      res.status(200).json(header);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Update
router.put("/:id", async (req, res) => {
  try {
    console.log(req.params.id)
    const updateName = await headerService.update(req.params.id, req.body)
    res.status(200).json(updateName);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;