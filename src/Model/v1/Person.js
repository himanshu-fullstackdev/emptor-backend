module.exports = class Person {

  // fetch all persons
  // -------------------------------
  // used by controllers/person.js - (fetchAllPersons)
  static fetchAll(db) {
        
    return new Promise(function (resolve, reject) {
        db.query("SELECT * FROM persons", function (err, rows) {
            if (!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
     });

  }

}