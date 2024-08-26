const express = require("express");
const userController = require("../controllers/userCtrl");


const router = express.Router();


router.post("/AddPassenger",userController.addPassengerController);
router.post("/AddTrain",userController.addTrainController);
router.post('/user-login',userController.loginController);


module.exports = router;