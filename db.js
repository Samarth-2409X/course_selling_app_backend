const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
mongoose.connect("mongodb+srv://samarth:Samarth7777%40@cluster0.z0adlk5.mongodb.net/DB");

const userSchema = ({
    email:{type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})

const adminSchema = ({
    email:{type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = ({
    title: String,
    discription: String,
    price: Number,
    imgurl: String,
    creatorId: ObjectId
})

const purchaseSchema = ({
    userId: ObjectId,
    courseId: ObjectId
})

const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("admin", adminSchema);
const courseModel = mongoose.Model("course", courseSchema);
const purchaseModel = mongoose.Model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}