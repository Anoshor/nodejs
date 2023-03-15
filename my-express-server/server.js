const { response } = require('express');
const express = require('express');

const app =  express();

app.get("/", function(req, res) {
    // console.log(request);  "/" targets home/root-- basically "route"
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
    res.send("this is my number...");
});

app.get("/about", function(req, res){
    res.send("my name is...");
});

app.listen(3000, function() {
    console.log("server started");
});


// install nodeman-- use nodeman server.js