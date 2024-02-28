const express = require('express');
const router = express.Router();
const users = require('../../users.json');

// router.get('/', (req, res) => {
//     res.send(users);
// });

router
.route('/')
.get((req, res) => {
    res.send(users);
})

module.exports = router;