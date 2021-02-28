//Error code - 1000

// import modules
const async                          = require("async");

// models
const Person                         = require("../../src/Model/v1/Person"); 
const PersonTag                      = require("../../src/Model/v1/PersonTag"); 

// fetch all persons
// /persons
exports.fetchAllPersons              = async function(req, res, next) {

  const db                           = req.con;

  const personsData                  = [];

  try {

    // fetch all persons from the person table
    const persons                    = await Person.fetchAll(db);

    // loop through the array - persons
    async.forEachOf( persons, async function( person, index ) {

      // fetch all person tags from the person_tags table w.r.t person_id
      const personTags               = await PersonTag.fetchByPersonId(db, person.id);

      // add final data to the object array - personsData
      personsData.push({
        'id'              : person.id,
        'name'            : person.name,
        'date_of_birth'   : person.dob,
        'biography'       : person.biography,
        'metadata'        : {
          'tags'          : personTags.map(tag => tag.tag) // create an array of tags 
        }
      });

    }, err => {
      if ( err ) {
          // return error
          const error = {'status': 'failure','message': 'Error: Please do it again','code': 1001,'error': err};
          return res.status(200).send(error);
      } else {
          // return success response
          return res.status(200).send({"status": "success", "data" : personsData});
      }
    });

  }
  
  catch (err) {
      // return error
      return res.status(200).send({"status": "failure", "code": 1002});
  } 

};
