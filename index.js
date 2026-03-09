const express = require("express");
const { courseRouter } = require("./routes/course.js");
const { userRouter } = require("./routes/user.js");
const { adminRouter } = require("./routes/admin.js");
const {mongoose} = require("mongoose");


const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    await mongoose.connect("mongodb+srv://samarth:Samarth7777@cluster0.z0adlk5.mongodb.net/courseApp");
    app.listen(3000);
    console.log("listening on port 3000");
}

main();


