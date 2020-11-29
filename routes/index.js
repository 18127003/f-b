const express = require("express");
// const { dirname } = require("path");
const router = express.Router();
// const path = require('path')
const { ensureAuthenticated, forwardAuthenticated, myAuth } = require("../config/auth");
const Post = require("../models/Post");
const User = require("../models/User");

// Welcome Page
router.get("/", forwardAuthenticated, (req, res) => {
    res.render("pages/home", {layout:"layout.ejs",user:null})
});

// Map Page
router.get("/map", forwardAuthenticated, (req, res)=> res.render("pages/map_spring",{user:req.user}))

// Dashboard
router.get("/home", ensureAuthenticated, (req, res) =>{

    res.render("pages/home", {user: req.user,})
});

// Blog page



// Create new post
router.get("/home/post", ensureAuthenticated, (req, res) =>res.render("pages/post",{user:req.user}));

module.exports = router;
