const express = require('express');
const router = express.Router();
const users = require('../../users.json');
const { getAllUsers, getUser, randomUser, createUser } = require('../../controllers/users.controller');

// router.get('/', (req, res) => {
//     res.send(users);
// });

router
.route('/')
.get(getAllUsers)
.post(createUser)

router.route('/random')
.get(randomUser)

router
.route('/:id')
.get(getUser)

module.exports = router;