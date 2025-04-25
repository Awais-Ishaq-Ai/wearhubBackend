const User = require('../Model/userModel');

// POST: Create New User
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // validation
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and Email are required' });
    }

    const newUser = new User({ name, email });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

module.exports = { createUser };