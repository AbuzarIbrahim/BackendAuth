const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/tokenAuth');
const {
  validateTaskCreate,
  validateTaskUpdate,
} = require('../middleware/validation');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require('../Controllers/taskController');

router.use(verifyToken);
router.post('/', validateTaskCreate, createTask);
router.get('/', getTasks);
router.put('/:id', validateTaskUpdate, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
