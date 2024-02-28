const users = require('../users.json');

// get all users from json file
module.exports.getAllUsers = (req, res) => {
    res.send(users);
}

// Get a random user from the loaded data
module.exports.randomUser = (req, res) => {
  const randomUser = users[Math.floor(Math.random() * users.length)];
  res.json(randomUser);
}

// get a user by id from json file
module.exports.getUser = (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    res.send(user);
}

// create a new user in json file
module.exports.createUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.send(users);
    // console.log(users);
}