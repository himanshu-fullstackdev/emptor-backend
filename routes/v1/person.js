const express           = require("express");
const router            = express.Router();

// controllers
const personController  = require('../../controllers/v1/person');

// GET | /persons | fetch all persons
// -------------------------------------------
// used by
// app : 
router.get("/", personController.fetchAllPersons);

module.exports  =   router; 