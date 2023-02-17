const router = require('express').Router();
const User = require('../models/User');
const userService = require('../services/userService');

router.get('/', async (req,res) => {
    try {
        const users = await userService.findAllUsers()
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }

});


router.get('/:id', async (req,res) => {
  try {
    const user = await userService.withId(req.params.id)
        res.status(200).json(user);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

});


router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;