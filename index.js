const express = require("express");
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res){
    res.send("Hi form home");
}

function handleProfile(req, res){
    res.send("You are on my profile");
}

//누군가 URL로 접근
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

