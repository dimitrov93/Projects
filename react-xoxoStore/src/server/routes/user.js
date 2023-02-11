const router = require('express').Router();
const userService = require('../services/userService');

router.get('/', async (req,res) => {
    try {
        const users = await userService.findAllUsers()
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }

});


router.get('/', async (req,res) => {
    try {
        const user = await userService.ById(req.params.id)
        console.log(user);
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err);
      }

});

module.exports = router;