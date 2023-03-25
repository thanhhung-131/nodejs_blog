const express = require('express');
const router = express.Router();

const mineController = require('../app/controllers/MineController');

router.get('/stored/courses', mineController.storedCourses);
router.get('/trash/courses', mineController.trashCourses);


module.exports = router;