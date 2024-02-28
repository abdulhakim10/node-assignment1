const users = require('../users.json');
const fs = require('fs');
const path = require('path');

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
    // Save the updated data back to the JSON file
    const usersDataPath = path.join(__dirname, '../users.json');
    fs.writeFileSync(usersDataPath, JSON.stringify(users, null, 2), 'utf8');
    res.send(users);
    // console.log(users);
}

// update multiple users based on user IDs
module.exports.updateUsers = (req, res) => {
    const { userIds, updatedData } = req.body;

    if (!userIds || !Array.isArray(userIds) || userIds.length === 0) {
        return res.status(400).json({ error: 'Invalid or missing user IDs in the request body.' });
    }

    userIds.forEach(userId => {
        const userIndex = users.findIndex(user => user.id == userId);

        if (userIndex !== -1) {
            // Update user information
            users[userIndex] = { ...users[userIndex], ...updatedData };
        }
    });

    // Save the updated data back to the JSON file
    const usersDataPath = path.join(__dirname, '../users.json');
    fs.writeFileSync(usersDataPath, JSON.stringify(users, null, 2), 'utf8');

    res.json({ message: 'Users updated successfully.' });
}

// update a user by id
module.exports.updateUser = (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    // console.log(updatedUser);
    const userIndex = users.findIndex(user => user.id == id);

    if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        res.send(users);
    } else {
        res.status(404).send('User not found');
    }
}

// delete a user by id
module.exports.deleteUser = (req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex(user => user.id == id);

    if (userIndex !== -1) {
        // The splice() method adds and/or removes array elements.
        // Syntax array.splice(index, howmany, item1, ....., itemX)
        users.splice(userIndex, 1);

        // Save the updated data back to the JSON file
        const usersDataPath = path.join(__dirname, '../users.json');
        fs.writeFileSync(usersDataPath, JSON.stringify(users, null, 2), 'utf8');
        
        res.send(users);
    } else {
        res.status(404).send('User not found');
    }
}