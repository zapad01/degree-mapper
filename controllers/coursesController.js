const Course = require('../model/Course');

const getAllCourses = async (req, res) => {
    const courses = await Course.find();
    if (!courses) return res.status(204).json({ 'message': 'No courses found.' });
    res.json(courses);
}

const createNewCourse = async (req, res) => {
    if (!req?.body?.CourseNum || !req?.body?.Description || !req?.body?.AlphaCode) {
        res.status(400).json({ 'message': 'Course number, Description, and Alpha code are required.' })
    }

    try {
        const result = await Course.create({
            CourseNum: req.body.CourseNum,
            Description: req.body.Description,
            AlphaCode: req.body.AlphaCode
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updateCourse = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const course = await Course.findOne({ _id: req.body.id }).exec();
    if (!course) {
        return res.status(204).json({ "message": `No employee matches ID ${req.body.id}.` });
    }
    if (req.body?.CourseNum) course.CourseNum = req.body.CourseNum;
    if (req.body?.Description) course.Description = req.body.Description;
    if (req.body?.AlphaCode) course.AlphaCode = req.body.AlphaCode;
    const result = await course.save();
    res.json(result);
}

const deleteCourse = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Course ID required.' });

    const course = await Course.findOne({ _id: req.body.id }).exec();
    if (!course) {
        return res.status(204).json({ "message": `No course matches ID ${req.body.id}.` });
    }
    const result = await course.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}

const getCourse = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Course ID required.' });

    const course = await Course.findOne({ _id: req.params.id }).exec();
    if (!course) {
        return res.status(204).json({ "message": `No course matches ID ${req.params.id}.` });
    }
    res.json(course);
}

module.exports = {
    getAllCourses,
    createNewCourse,
    updateCourse,
    deleteCourse,
    getCourse
}