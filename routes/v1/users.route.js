const express = require('express');
const router = express.Router();
const users = require('../../users.json');
const { getAllUsers, getUser } = require('../../controllers/users.controller');

// router.get('/', (req, res) => {
//     res.send(users);
// });

router
.route('/')
.get(getAllUsers)

router
.route('/:id')
.get(getUser)

module.exports = router;