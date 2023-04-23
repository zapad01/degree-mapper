const express = require('express');
const router = express.Router();
const coursesController = require('../../controllers/coursesController')

router.route('/')
    .get(coursesController.getAllCourses)
    .post(coursesController.createNewCourse)
    .put(coursesController.updateCourse)
    .delete(coursesController.deleteCourse);

router.route('/:id')
    .get(coursesController.getCourse);


module.exports = router;