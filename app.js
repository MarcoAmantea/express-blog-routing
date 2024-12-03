const express = require("express");
const app = express();
const posts = require("./data/posts");
const port = 3000;
const router = require("./routers/posts-routers")

app.use("/posts-routers", router)

app.get("/", (req,res) => {
    res.json("PROVA POSTMAN")
})

app.listen(port , () => {
    console.log("Il server è partito!");
})