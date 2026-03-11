const {Router} = require("express");
const adminRouter = Router();
const {adminModel, userModel, courseModel} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const {adminMiddleware} = require("../middlewares/admin");
 
adminRouter.post("/signup", async(req, res) => {
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

adminRouter.post("/signin", async(req, res) => {
    const {email, password} = req.body;

    const admin = await adminModel.findOne({
        email,
        password
    })

    if(admin){
        const token = jwt.sign({
            id:admin._id,
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token:token
        })
    }
    else{
        res.status(403).json({
            msg:"Incorrect credentials"
        })
    }
})

adminRouter.post("/course", adminMiddleware, async(req, res) => {

    adminId = req.userId;

    const {title, discription, imgurl, price} = req.body;

    const course = await courseModel.create({
        title: title,
        discription: discription,
        imgurl: imgurl,
        price: price,
        creatorId: adminId
    })

    res.json({
        msg:"course is successfully created",
        courseId: course._id
    })
})

adminRouter.put("/course",adminMiddleware, async (req, res) => {
    const adminId = req.userId;

    const {courseId, title, discription, imgurl, price} = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    }, {
        title: title,
        discription: discription,
        imgurl: imgurl,
        price: price
    })

    res.json({
        msg:"course is successfully updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk", adminMiddleware, async(req, res) => {

    adminId = req.userId;

    const course = await courseModel.find({
        creatorId: adminId,
    })
    
    res.json({
        msg:"course is feched",
        course
    })
});

module.exports = {
    adminRouter: adminRouter
}