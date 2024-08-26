const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    passengerId: {
    type: Number,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  dateofaddmission: {
    type: Date,
  },
  gender: {
    type: String,
  },
  occupation: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNum: {
    type: Number,
  },
  nationality: {
    type: String,
  },  
  addressCity: {
    type: String,
  },
  addressState: {
    type: String,
  },

});
 
const userModel = mongoose.model("Passengers", userSchema);

module.exports = userModel;