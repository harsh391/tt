const router = require('express').Router()

const {createInst, getInst, updateInst, getInstStd} = require('../controllers/instController')

// const auth = require('../middlewares/auth')

router.route('/inst/:id').put(updateInst)
router.route('/insts').get(getInst)
router.route('/inst').post(createInst)
router.route('/inst/:std').get(getInstStd)
// router.route('/inst/:id').delete(deleteInst)

module.exports = router;