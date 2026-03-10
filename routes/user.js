const {Router} = require("express");
const userRouter = Router();
const {userModel, purchaseModel, courseModel} = require("../db");
const jwt = require("jsonwebtoken");

    userRouter.post("/singup", async(req, res) => {
        const {email, password, firstname, lastname} = req.body;

        await userModel.create({
            email: email,
            password: password,
            firstName: firstname,
            lastName: lastname
        })

        res.json({
            msg:"signup suceeded"
        })
    });

    userRouter.post("/signin", async(req, res) => {

        
        res.json({
            msg:"nothing"
        })
    });

    userRouter.get("/purchase", (req, res) =>{
        res.json({
            msg:"nothing"
        })
    });


module.exports = {
    userRouter: userRouter
}