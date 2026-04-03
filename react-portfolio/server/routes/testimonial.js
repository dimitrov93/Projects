const router = require('express').Router();
const testimonialService = require('../services/testimonialService');


//GET ALL
router.get('/', async (req,res) => {
    try {
        const testimonials = await testimonialService.find()
        res.status(200).json(testimonials);
      } catch (err) {
        res.status(500).json(err);
      }
});

//CREATE
router.post("/create", async (req, res) => {
    const data = {...req.body};
    try {
      const testData = await testimonialService.create(data);
      console.log(testData);
      res.status(200).json(testData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//DELETE
router.delete("/:id", async (req, res) => {
    try {
      await testimonialService.deleteTestimonial(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;