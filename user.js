
function createUserRoute(app){
    app.post("user/singup", (req, res) => {
        res.json({
            msg:"nothing"
        })
    });

    app.post("user/signin", (req, res) => {
        res.json({
            msg:"nothing"
        })
    });

    app.post("user/purchase", (req, res) =>{
        res.json({
            msg:"nothing"
        })
    });
}

module.exports = {
    createUserRoute: createUserRoute
}