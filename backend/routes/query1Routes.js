const express = require('express');
const router = express.Router();
const railModel = require('../models/railModels');

// searching for available train from src to destination

router.get('/train-ctrl', async (req, res) => {    
  try {
    const source = req.query.SourceStationName;
    const destination = req.query.DestinationStationName;

    const result = await railModel.aggregate([
      {
        $match: {
          SourceStationName: source, 
          DestinationStationName: destination, 
        },
      },
     
    ]);
    if (result.length === 0) {
      res.status(404).send({
        message: "No data found for the specified criteria",
        success: false,
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error querying data",
      success: false,
    });
  }
});



module.exports = router;
