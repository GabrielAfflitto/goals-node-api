
// work in progress
const allUsers = function() {
  return database.raw('SELECT * FROM users')
}

module.exports = allUsers;
