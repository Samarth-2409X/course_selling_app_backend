const {Router} = require("express");
const userRouter = Router();

    userRouter.post("user/singup", (req, res) => {
        res.json({
            msg:"nothing"
        })
    });

    userRouter.post("user/signin", (req, res) => {
        res.json({
            msg:"nothing"
        })
    });

    userRouter.get("user/purchase", (req, res) =>{
        res.json({
            msg:"nothing"
        })
    });


module.exports = {
    userRouter: userRouter
}