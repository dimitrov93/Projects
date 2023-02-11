const router = require('express').Router();
const Email = require('../models/Email');


// Create
router.post("/", async (req, res) => {
    const newEmail = new Email(req.body);
    try {
      const savedEmail = await newEmail.save();
      res.status(200).json(savedEmail);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;