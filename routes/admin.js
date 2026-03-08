const {Router} = require("express");
const adminRouter = Router();

adminRouter.post("/signup", (res, req) => {
    res.json({
        msg:"nothing"
    })
})

adminRouter.post("/signin", (res, req) => {
    res.json({
        msg:"nothing"
    })
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