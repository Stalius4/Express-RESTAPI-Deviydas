

const { Router } = require('express');
const User = require('../models/User');

const userRouter = Router();


// http://localhost:5001/user/
userRouter.get('/', async (req, res) => {
    // console.log(req);
    // res.send('we are in the userRoutes file on the first get request')
    const users = await User.findAll();
    res.status(200).json({users: users})
});

// http://localhost:5001/user/:id


userRouter.get('/:id', async (req, res) => {
    const user = await User.findOne({where: { id: req.params.id }});
    res.status(200).json({message: user});
});

userRouter.get('/username/:username', async (req, res) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log(req.params)
    const user = await User.findOne({where: {username: req.params.username}})
    res.status(200).json({messageTwo: user});
});



// http://localhost:5001/user/cheese/
userRouter.get('/cheese', (req, res) => {
    res.send("cheese");
});

userRouter.post('/', async (req, res) => {
    console.log(req);
    const user = await User.create({
        username: req.body.username, 
        email: req.body.email,
        password: req.body.password
    });
    console.log(user);
    res.status(201).json({message: `${user.username} added to the database`, user: user});
});

userRouter.delete('/delete', (req, res) => {
    res.send('delete in the userRouter file')
})

module.exports = userRouter;