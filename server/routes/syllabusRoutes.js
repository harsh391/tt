const router = require('express').Router()


const { createSyllabus, getChapter, deleteSyllabus, editSyllabus } = require('../controllers/syllabusControler')
router.route('/syllabus').post(createSyllabus)
router.route('/syllabus/:std/:sub').get(getChapter)
router.route('/syllabus/:id').delete(deleteSyllabus)
router.route('/syllabus/:id').put(editSyllabus)

module.exports = router;