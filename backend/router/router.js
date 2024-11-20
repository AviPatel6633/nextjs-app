const express = require('express');
const router = express.Router();
const passport = require('passport');
const { jwtAuthMiddleware , generateToken} =require('./../helpers/jwt')

const menuController = require('../controller/menu');
const userController = require('../controller/user');

router.get('/', (req, res) => {
    res.send('Hello User, Welcome to Nodejs!');
});

// Add a new route to validate the token
router.post('/validate-token', jwtAuthMiddleware, (req, res) => {
    res.json({ isValid: true });  // If jwtAuthMiddleware doesn't throw an error, the token is valid
});

// Registration route
router.post('/signup', userController.postUser);

// Login route
router.post('/login', userController.loginUser);
// router.post('/login', passport.authenticate('local', { 
//     successRedirect: '/user', 
//     failureRedirect: '/login' 
// }), userController.loginUser);

// Logout route
router.post('/logout', userController.logoutUser);

// Get all users route
router.get('/user', jwtAuthMiddleware, userController.getUser);

// menu Routes
router.post('/menu', menuController.postMenuItem);
router.get('/menu', menuController.getAllMenuItems);
router.get('/menu/?taste=:taste', menuController.getMenuItemsByTaste);
router.put('/menu/?id=:id', menuController.updateDataById);
router.delete('/menu/?id=:id', menuController.deleteDataById);

module.exports = router;