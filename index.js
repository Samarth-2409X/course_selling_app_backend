const express = require("express");
const { courseRouter } = require("./routes/course.js");
const { userRouter } = require("./routes/user.js");


const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);


app.listen(3000);