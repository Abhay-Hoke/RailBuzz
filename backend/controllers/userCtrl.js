const userModel = require("../models/userModels");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const addPassengerController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ passengerId: req.body.passengerId });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
else{
    const {
      passengerId,
        name,
        age,
        dateofaddmission,
        gender,
        occupation,
        email,
        mobileNum,
        nationality,  
        addressCity, 
        addressState} = req.body;
    
    const newUser = new userModel({
      passengerId,
        name,
        age,
        dateofaddmission,
        gender,
        occupation,
        email,
        mobileNum,
        nationality,   
        addressCity, 
        addressState});
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  }
 } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};






const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await userModel.findOne({ email });

   
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }


    const isPasswordMatch = await bcrypt.compare(password, user.Password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
      expiresIn: '1h',
    });


    res.json({ token });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

  const addTrainController = async (req, res) => {
    try {
      
      const {
        trainId,
        trainName,
        email,
        phone_number,        
        srccity, 
        srcstate,
        descity,
        desstate,
        railwayZone,
        totalSeatingCapacity,
        } = req.body;
      
      const newTrain = new trainModel({
        trainId,
        trainName, 
        email,
        phone_number,      
        srccity, 
        srcstate,
        descity,
        desstate,
        railwayZone,
        totalSeatingCapacity,});
      await newTrain.save();
      res.status(201).send({ message: "Register Sucessfully", success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Register Controller ${error.message}`,
      });
    }
  };


module.exports = { loginController, addPassengerController,addTrainController};