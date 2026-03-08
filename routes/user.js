const {Router} = require("express");
const userRouter = Router();

    userRouter.post("/singup", (req, res) => {
        res.json({
            msg:"nothing"
        })
    });

    userRouter.post("/signin", (req, res) => {
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