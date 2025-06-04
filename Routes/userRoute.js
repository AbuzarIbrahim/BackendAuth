const express = require('express');
const router = express.Router();
const { validateSignup, validateLogin } = require('../middleware/validation');
const { verifyToken } = require('../middleware/tokenAuth');
const { 
    SignUp,
    LogIn,
    GetAllUsers,
    DeleteUser,
    ForgotPassword,
    ChangePassword,
    UpdatePassword
} = require('../Controllers/userController');

// Public routes
router.post('/signup', validateSignup, SignUp);
router.post('/login', validateLogin, LogIn);
router.post('/forgot-password', ForgotPassword);

// Protected routes (require authentication)
router.get('/users', verifyToken, GetAllUsers);
router.delete('/user/:id', verifyToken, DeleteUser);
router.post('/change-password', verifyToken, ChangePassword);
router.put('/update-password', verifyToken, UpdatePassword);

module.exports = router;
