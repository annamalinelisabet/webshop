const Order = require('./orderSchema');


// -- CREATE NEW ORDER, INLOGGED USER -- //

exports.newOrder = (req, res) => {

    Order.create({
        userId:         req.userData.id,
        products:       req.body.products,
        totalPrice:     req.body.totalPrice
    })
    .then(order => {
        res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Order was created successfully!',
            order
        })
    })
    .catch(err => {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to create a new order...',
            err
        })
    })

}


// -- GET ALL ORDERS FROM INLOGGED USER -- //

exports.getAllOrdersFromUser = (req, res) => {

    if(req.userData.id !== req.params.userId) {
        return res.status(403).json({
            statusCode: 403,
            status: false,
            message: 'You do not have access to this content!'
        })
    }
    
    Order.find({ userId: req.params.userId }, (err, orders) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Ooops something went wrong...'
            })
        }

        if(!orders) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'This user does not exist...'
            })
        }

        res.status(200).json(orders)

    })
}

// 


