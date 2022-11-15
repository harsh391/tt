const Insts = require('../models/instModel')
const Razorpay = require('razorpay')
const crypto = require('crypto')
const Payments = require('../models/paymentModel')
const { log } = require('console')
const { findByIdAndUpdate } = require('../models/instModel')
const { loadavg } = require('os')
// const Users = require('../models/userModel')

const createOrders = async (req,res) => {
    try {
        const instance = new Razorpay({
            key_id:process.env.RP_KEY_ID,
            key_secret:process.env.RP_SECRET_KEY
        })    
        const options = {
            amount: req.body.amount*100,
            currency:"INR",
            receipt:crypto.randomBytes(10).toString("hex"),
        }
        instance.orders.create(options,(error,order) => {
            if(error) {
                console.log(error);
                return res.status(500).json({msg:"Something went wrong"})
            }
            res.status(200).json({data:order})
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({msg:err.message})
    }
}

const verifyOrder = async(req,res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature } = req.body.response;

        const {paymentId,instNo} = req.body.details;

        const sign = razorpay_order_id + "|" + razorpay_payment_id

        const expectedSign = crypto
            .createHmac("sha256",process.env.RP_SECRET_KEY)
            .update(sign.toString())
            .digest("hex")

        if(razorpay_signature === expectedSign) {
            // Add into database
            try {
                if(instNo==='instOneStatus') {
                     const payment = await Payments.findByIdAndUpdate(paymentId,{instOneStatus:'Paid'})
                }
                else if(instNo==='instTwoStatus') {
                     const payment = await Payments.findByIdAndUpdate(paymentId,{instTwoStatus:'Paid'})
                }
                else {
                     const payment = await Payments.findByIdAndUpdate(paymentId,{instThreeStatus:'Paid'})
                }
            } catch (err) {
                return res.status(400).json({msg:err.message})
            }
            
            return res.status(200).json({msg:'Payment verified successfully.',isSuccess:true})
        } else {
            return res.status(400).json({msg:'Invalid Signature Sent.'})
        }
        
    } catch (err) {
        console.log(err);
        res.status(500).json({msg:err.message})
    }
}

const getPayments = async(req,res) => {
    try {
        const payments = await Payments.find()
        res.status(201).json(payments)
    } catch (err) {
        res.status(500).json({msg:err.message})
    }
}

const getPayment = async(req,res) => {
    try {
        const userId = req.params.id
        const std = req.params.std

        const payment = await Payments.findOne({userId:userId})
        const inst = await Insts.findOne({std:std})

        if(!payment) {
            try {
                const newPayment = await Payments.create({userId:userId})
                return res.status(201).json({payment:newPayment,inst})
            } catch (err) {
                res.status(500).json({msg:err.message})
            }
        }
        else {
            return res.status(201).json({payment,inst})
        }
    } catch (err) {
        res.status(500).json({msg:err.message})
    }
}

const updatePayment = async(req,res) => {
    try {
        
    } catch (err) {
        res.status(500).json({msg:err.message})
    }
}

module.exports = {createOrders,verifyOrder,getPayments, getPayment, updatePayment}

