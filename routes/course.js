const {Router} = require("express");
const courseRouter = Router();

	courseRouter.post("course/purchse", (req, res) => {
        res.json({
            msg:"nothing"
        })
    });

    courseRouter.get("course/preview", (req, res) => {
        res.json({
            msg:"nothing"
        })
    });


module.exports = {
    courseRouter: courseRouter
}



