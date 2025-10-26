const router = require("express").Router();
const msgService = require("../services/msgService");


// By Id
router.get("/:id", async (req, res) => {
  try {
    let msg = await msgService.withId(req.params.id);
    res.status(200).json(msg);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ALL
router.get("/", async (req, res) => {
  try {
    const msg = await msgService.findAllMsg();
    res.status(200).json(msg);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create
router.post("/", async (req, res) => {
  const data = {...req.body.data, userId: req.body.userId, userName: req.body.userName};
  try {
    const msg = await msgService.create(data);
    console.log(msg);
    res.status(200).json(msg);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    let deleted = await msgService.delete(req.params.id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Update
router.put("/:id/edit", async (req, res) => {
  try {
    const updatedMsg = await msgService.update(req.params.id, req.body)
    res.status(200).json(updatedMsg);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
