const express = require("express");
const { createCourseRouting, courseRouter } = require("./routes/course.js");
const { userRouter } = require("./routes/user.js");
const {createUserRoute} = requier("./routes/user.js");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);


app.listen(3000);