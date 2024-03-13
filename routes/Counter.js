const express = require("express");
const router = express.Router();

//import controller
const { IncrementCounter } = require("../controllers/IncrementCounter");


//define APi routes
router.get("/IncrementCounter", IncrementCounter);


module.exports = router;