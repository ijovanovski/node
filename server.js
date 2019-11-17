var express = require('express');
var app = express();
var config= require("./config.js");
var http= require('http');

var router = require("./router")(app, server);

var server = app.listen(5000, function () {
    console.log('Server is running..');
    
})