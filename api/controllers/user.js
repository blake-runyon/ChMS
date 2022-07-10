const User = require('../models/user');

const getUser = async (req, res) => {
    const user = await User.find();
    
    if(user) {
        res.status(200).json(user)
    } else {
        res.status(404).json({ error: 'No Users Found' })
    }
}

const addUser = async (req, res) => {
    // check if email exists in database
    const user = await User.findOne({ email: req.body.email });

    if (user) {
        res.status(400).json({ error: 'Email already exists' });
    } else {
        // create user from schema
        await User.create(req.body);
        res.status(200).json({ message: 'User created' });
    }
}

module.exports = { getUser, addUser };