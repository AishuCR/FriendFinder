var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

var app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
var PORT = process.env.Prort || 8080;

//input values
var friend_data1 = [
    {
        "name": "Ahmed",
        "Photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            4,
            1,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
];
var friend_data1 = [
    {
        "name": "Jane",
        "Photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            4,
            1,
            4,
            5,
            1,
            3,
            2,
            3,
            5
        ]
    }
];