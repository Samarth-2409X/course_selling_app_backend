const {Router} = require("express");
const courseRouter = Router();
const {purchaseModel, courseModel} = require("../db");
const {userMiddleware} = require("../middlewares");

	courseRouter.post("/purchse", userMiddleware, async(req, res) => {
        const userId = req.userId;
        const courseId = req.body.courseId;

        await courseModel.create({
            userId,
            courseId
        })

        res.json({
            msg:"you have successfully bought the course"
        })
    });

    courseRouter.get("/preview", async(req, res) => {
        const courses = await purchaseModel.find({})

        res.json({
            courses
        })
        
    });


module.exports = {
    courseRouter: courseRouter
}



