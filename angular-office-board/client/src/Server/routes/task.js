const router = require("express").Router();
const Task = require("../models/Task");
const taskService = require("../services/taskService");

// ALL
router.get("/", async (req, res) => {
  try {
    const tasks = await taskService.findAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create
router.post("/", async (req, res) => {
  const data = {...req.body.data, userId: req.body.userId, userName: req.body.userName};
  try {
    const savedTask = await taskService.create(data);
    console.log(savedTask);
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    let deleted = await taskService.delete(req.params.id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Details
router.get("/:id", async (req, res) => {
  try {
    let task = await taskService.withId(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Comments
router.post("/comments/:id", async (req, res) => {
  try {
    let task = await taskService.addComment(req.params.id, req.body.data);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
