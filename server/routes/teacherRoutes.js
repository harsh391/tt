const router = require('express').Router()

const {createTeacher, getTeacher, loginTeacher} = require('../controllers/teacherController')

// const auth = require('../middlewares/auth')

// router.route('/inst/:id').put(updateInst)
router.route('/:id').get(getTeacher)
router.route('/').post(createTeacher)
router.route('/login').post(loginTeacher)
// router.route('/inst/:id').delete(deleteInst)

module.exports = router;