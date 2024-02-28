const express = require('express');
const app = express();
const port = 3030;
const userRoute = require('./routes/v1/users.route.js')

app.use(express.json());
app.use('/api/v1/users',userRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on the port ${port}`)
});