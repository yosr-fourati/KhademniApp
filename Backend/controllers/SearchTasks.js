const db = require('../db');

exports.displayTasks = (req,res) => {
 const q ='SELECT * FROM services, users where services.employer_id = users.user_id';
 db.query(q, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      res.status(500).send('Error querying database');
      return;
    }
    res.json(results);
  });
}