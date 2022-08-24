const allUsers = require('../models/user').allUsers;


const index = function(req, res, next) {
  allUsers().then(function(users) {
   if(!foods.rows) {
     return res.sendStatus(404)
   } else {
     res.json(foods.rows)
   }
 })
})

module.exports = index;
