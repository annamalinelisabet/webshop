const router = require('express').Router();
const orderModel = require('../models/orders/orderModel');
const auth = require('../authentication/auth');


router.post('/', auth.verifyToken, orderModel.newOrder);

router.get('/find/:userId', auth.verifyToken, orderModel.getAllOrdersFromUser);


module.exports = router;