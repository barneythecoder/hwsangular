const express = require('express');
const router = express.Router();
const User = require('../models/user');
const config = require('../config/database');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Register Route
router.post('/register', (req, res, next)=>{
    let newUser = User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });

    User.addUser(newUser, (err, user)=>{
        if(err){
            res.json({success:false, msg:'Failed to register'});            
        }
        else{
            res.json({success: true, msg:'User Registered'});
        }
    });
});

// Authenticate Route
router.post('/authenticate', (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user)=>{
        if(err)throw err;
        if(!user){
            return res.json({sucess:false, msg:'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800                    
                });

                res.json({
                    sucess: true,
                    token: 'JWT '+token,
                    user:{
                        id: user._id,
                        name: user.name, 
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg:'Incorrect password'});
            }
        });
    });
});

// Profile Route
router.get('/profile', passport.authenticate('jwt',{session: false}),(req, res, next)=>{
    res.send('profile');
});
router.post('/validate', (req, res, next)=>{
    res.json({user: req.user});
});

module.exports = router; 