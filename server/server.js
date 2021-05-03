const express = require('express');
const socket = require('socket.io')

var app = express();

const port = 3000;

var server = app.listen(port, () => console.log("Listening to port 3000"));

app.use('/',express.static('../app'));


var io = socket(server);

var emit = io.on('connection' ,(socket)=>{
    console.log('user connected, port:3000')
})

app.get("/result", (req, res)=>{
    res.send("Why are you visiting this url?")});