const {Router} = require("express");
const userRouter = Router();
const {userModel, purchaseModel, courseModel} = require("../db");
const jwt = require("jsonwebtoken");
const { userMiddleware } = require("../middlewares/user");
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

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

        const {email, password} = req.body;

        const user = await userModel.findOne({
            email: email,
            password: password
        });

        if(user){
            const token = jwt.sign({
                id: user._id,
            }, JWT_USER_PASSWORD)

            res.json({
                token: token
            })
        }
        else{
            res.status(402).json({
                msg:"Incorrect credentials"
            })
        }
    });

    userRouter.get("/purchase", userMiddleware, async(req, res) =>{
        const userId = req.userId;

        const purchases = await purchaseModel.findOne({
            userId,
        })

        const courseData = await courseModel.find({
            _id:{$in: purchases.map(p => p.courseId)}
        }) 

        res.json({
            purchases,
            courseData
        })
    });


module.exports = {
    userRouter: userRouter
}