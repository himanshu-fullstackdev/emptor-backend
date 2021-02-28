module.exports = class PersonTag {

  // fetch tags w.r.t personId
  // -------------------------------
  // used by controllers/person.js - (fetchAllPersons)
  static fetchByPersonId(db, personId ) {

    return new Promise(function (resolve, reject) {
      db.query("SELECT * FROM person_tags WHERE person_id = ?", [personId], function (err, rows) {
          if (!err) {
              resolve(rows);
          } else {
              reject(err);
          }
      });
    });

  }

}