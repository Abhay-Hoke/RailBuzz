const express = require("express");
const railModel=require("./models/railModels")
const userModel  = require("./models/userModels");
const Sign = require("./models/signModels");
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('./models/signModels')
var mongoose=require("mongoose");

const app = express()

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))








app.post('/register', (req, res) => {
  const {name, email, password} = req.body;
  bcrypt.hash(password, 10)
  .then(hash => {
      UserModel.create({name, email, password: hash})
      .then(user => res.json("Success"))
      .catch(err => res.json(err))
  }).catch(err => res.json(err))
})

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  UserModel.findOne({email: email})
  .then(user => {
      if(user) {
          bcrypt.compare(password, user.password, (err, response) => {
              if(response) {
                const token = jwt.sign({email: user.email, role: user.role},
                      "jwt-secret-key", {expiresIn: '1d'})  
                  res.cookie('token', token)
                  return res.json({Status: "Success", role: user.role})
              }else {
                  return res.json("The password is incorrect")
              }
          })
      } else {
          return res.json("No record existed")
      }
  })
})








// Routes
app.use("/user", require("./routes/userRoutes"));
app.use("/analytics", require("./routes/query1Routes.js"));


app.post('/user/user-login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Sign.findOne({ username, password });
    if (user) {
      res.json('Success');
    } else {
      res.status(400).json({ msg: 'No record existed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.get("/customers", async (req, res) => {
  try {
    const customers = await userModel.find();
    res.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



app.delete('/api/train/:TrainNo', async (req, res) => {
  const { TrainNo } = req.params;

  try {

    const deletedTicket = await railModel.findOneAndDelete({ TrainNo });

    if (deletedTicket) {
      return res.json({ success: true, message: 'Train deleted successfully.' });
    } else {
      return res.status(404).json({ success: false, message: 'Train not found.' });
    }
  } catch (error) {
    console.error('Error deleting train:', error);
    return res.status(500).json({ success: false, message: 'Failed to delete train.' });
  }
});



app.post('/api/trains', async (req, res) => {
  try {
    const train = await railModel.create(req.body);
    res.status(201).json(train);
  } catch (error) {
    console.error('Error adding train:', error);
    res.status(500).json({ error: 'Failed to add train' });
  }
});






const PORT = process.env.PORT || 8080; 

const server = app.listen(PORT, () => {
 
  
//mongodb+srv://tejaskolhe184:tejas4321@project.csqiff7.mongodb.net/?retryWrites=true&w=majority&appName=Project

mongoose.connect('mongodb+srv://abhayhoke18:Abhay951126@projectone.qtsagte.mongodb.net/?retryWrites=true&w=majority&appName=projectone',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var connectDB= mongoose.connection;

connectDB.on('error',() => console.log("error in connecting database"));
connectDB.once('open',() => console.log("Connected to Database"));



 
  console.log(`Server is running on port ${PORT}`);
});

