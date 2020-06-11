const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")



server.use(express.static("public"))


server.get("/", (req, res) => 
{
   res.sendFile(__dirname + "/view/index.html")
})

server.get("/page-login", (req, res) => 
{
   res.sendFile(__dirname + "/view/login.html")
})

server.get("/page-create-point", (req, res) => 
{
   res.sendFile(__dirname + "/view/create-point.html")
})

server.get("/page-profile", (req, res) => 
{
   res.sendFile(__dirname + "/view/profile.html")
})

server.get("/page-search-results", (req, res) => 
{
   res.sendFile(__dirname + "/view/search-results.html")
})




server.listen(3001)