const users = require('../users.json');

// get all users from json file
module.exports.getAllUsers = (req, res) => {
    res.send(users);
}

// get user by id from json file
module.exports.getUser = (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    res.send(user);
}