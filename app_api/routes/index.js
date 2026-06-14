const express = require("express");
const router = express.Router();

// define route for our trips endpoint
const tripsController = require("../controllers/trips");

// define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(tripsController.tripsAddTrip) // POST Method Adds a Trip
    

// GET Method routes tripsFindByCode - require parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;