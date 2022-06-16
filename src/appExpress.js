const express = require('express');
const { connection } = require('./db/connection');
const User = require('./models/User');

const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// http://localhost:5001/user

// app.use('/products', productsRouter);

app.use('/user', userRouter);

//  http://localhost:5001/
app.use('/', (req, res) => {
    res.send('we are in the appExpress file')
});


app.listen(5001, () => {
    User.sync({alter: true});
    console.log('app is listening on localhost port 5001')
});