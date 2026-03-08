const express = require("express");
const {createUserRoute} = requier("./user.js");

const app = express();

createUserRoute(app);

app.post("course/purchse", (req, res) => {
    res.json({
        msg:"nothing"
    })
});

app.get("course/preview", (req, res) => {
    res.json({
        msg:"nothing"
    })
});

app.listen(3000);