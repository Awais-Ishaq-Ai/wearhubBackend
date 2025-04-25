// // routes/userRouter.js
// const express = require('express');
// const router = express.Router();
// const User = require('../Model/userModel');

// // GET all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // POST a new user
// router.post('/', async (req, res) => {
//   const { name, email } = req.body;
//   try {
//     const newUser = new User({ name, email });
//     await newUser.save();
//     res.status(201).json({ message: "User created", user: newUser });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { createUser } = require('../Controller/userController');

// POST route
router.post('/create', createUser);

module.exports = router;
