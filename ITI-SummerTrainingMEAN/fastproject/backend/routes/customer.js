const express = require('express')

const router = express.Router();

const Customer = require('../models/customer')

//get list
router.get('/',async(req,res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message:"an error occured"})
    }
})


//get id
router.get('/:id',async(req,res) => {
    try {
        const id = req.params.id
        const customers = await Customer.findOne({ _id: id })
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message:"an error occured"})
    }
})

//post create
router.post('/',async(req,res) => {
    try {
        const customer = new Customer(req.body);
        const savedcustomer = await customer.save()
        res.status(200).json(savedcustomer);
    } catch (error) {
        res.status(500).json({ message:"an error occured"})
    }
})


//put : update
router.put('/:id',async(req,res) => {
    try {
        const id = req.params.id;
        const customerdata = req.body;
        const updatedcustomer = await Customer.findOneAndUpdate(
            { _id : id },
            { $set:customerdata },
            {new:true}
    );

        res.status(200).json(updatedcustomer);

    } catch (error) {
        res.status(500).json({ message:"an error occured"})
    }
})


//delete
router.delete('/:id',async(req,res) => {
    try {
        const id = req.params.id;
        const deletedcustomer = await Customer.deleteOne({ _id : id })
        res.status(200).json(deletedcustomer);

    } catch (error) {
        res.status(500).json({ message:"an error occured"})
    }
})


module.exports = router;