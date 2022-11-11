const router = require('express').Router()


const {getUsers} = require('../controllers/userController')
const {createFees, getFees, updateFees} = require('../controllers/feesContoller')

// const auth = require('../middlewares/auth')

router.route('/getUsers').get(getUsers)
router.route('/fees').put(updateFees)
router.route('/fees/:std/:id').get(getFees)
router.route('/fees').post(createFees)
// router.route('/fees/:id').put(editFees)

module.exports = router;