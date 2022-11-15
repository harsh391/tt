const router = require('express').Router()

const {createOrders, verifyOrder, getPayments, getPayment, updatePayment} = require('../controllers/paymentController.js')


// const auth = require('../middlewares/auth')

// router.route('/getUsers').get(getUsers)

router.route('/payment/orders').post(createOrders)
router.route('/payment/verify').post(verifyOrder)
router.route('/payment/:std/:id').get(getPayment)
router.route('/payment/:id').put(updatePayment)
router.route('/payments').get(getPayments)
// router.route('/payment').post(createFees)

module.exports = router;