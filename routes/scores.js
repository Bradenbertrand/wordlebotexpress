const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/Users')

const router = express.Router();

router.get('/avg', async (req, res) => {
    try {
        const usersSorted = await User.find({ scoreAvg: { $gte: 0.1 }, gamesPlayed: { $gte: 3 } }).sort({ scoreAvg: 1 }).limit(20);
        res.status(200).json(usersSorted);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}); 

router.get('/points', async (req, res) => {
    try {
        const usersSorted = await User.find({ gamesPlayed: { $gte: 3 }}).sort({ points: -1 }).limit(20);
        res.status(200).json(usersSorted);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}); 

module.exports = router;