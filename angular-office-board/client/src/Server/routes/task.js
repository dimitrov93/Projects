const router = require('express').Router();
const Task = require('../models/Task');
const taskService = require('../services/taskService');
 

// ALL
router.get('/', async (req,res) => {
    try {
        const tasks = await taskService.findAllTasks()
        res.status(200).json(tasks);
      } catch (err) {
        res.status(500).json(err);
      }

});

// Create
router.post("/", async (req, res) => {
    const newTask = new Task(req.body);
    try {
      const savedTask = await newTask.save();
      res.status(200).json(savedTask);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// DELETE
router.delete('/:id', async (req,res) => {

  try {
    let deleted = await taskService.delete(req.params.id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;