const {Router} = require("express");
const courseRouter = Router();

	courseRouter.post("/purchse", (req, res) => {
        res.json({
            msg:"nothing"
        })
    });

    courseRouter.get("/preview", (req, res) => {
        res.json({
            msg:"nothing"
        })
    });


module.exports = {
    courseRouter: courseRouter
}



