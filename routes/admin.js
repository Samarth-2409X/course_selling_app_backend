const {Router} = require("express");
const adminRouter = Router();
const {adminModel, userModel} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
 
adminRouter.post("/signup", async(res, req) => {
    const {email, password, firstName, lastName} = req.body;

    await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })

    res.json({
        msg:"user is successfully signed up"
    })
})

adminRouter.post("/signin", async(res, req) => {
    const {email, password} = req.body;

    const admin = await userModel.findOne({
        email,
        password
    })

    if(admin){
        const token = jwt.sign({
            id:user._id,
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token:token
        })
    }
    else{
        res.status(403).json({
            mgs:"Incorrect credentials"
        })
    }
})

adminRouter.post("/course", (res, req) => {

    res.json({
        msg:"nothing"
    })
})

adminRouter.put("/course", (res, req) => {
    res.json({
        msg:"nothing"
    })
})

adminRouter.get("/course/bulk", (res, req) => {
    res.json({
        msg:"nothing"
    })
})

module.exports = {
    adminRouter: adminRouter
}