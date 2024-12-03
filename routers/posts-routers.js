const express = require("express");
const router = express.Router();
const posts = require("../data/posts")

//INDEX
router.get("/", (req, res) => {
    res.json({
        postsList: posts,
        totalePosts: posts.length
    })
})

//SHOW
router.get("/:id", (req, res) => {
    const postId = req.params.id;
    const postDetail = posts.filter((curPost) => {
        return curPost.id == postId
    });
    res.json(postDetail);
})

//CREATE
router.post("/", (req, res) => {
    res.json("aggiungiamo un nuovo elemento")
})

//UPDATE
router.put("/:id", (req, res) => {
    const postId = req.params.id
    res.json("modifichiamo tutti i dati dell'oggetto con id numero " + postId)
})
//MODIFY
router.patch("/:id", (req, res) => {
    const postId = req.params.id
    res.json("modifichiamo solo alcuni dati dell'oggetto con id numero " + postId)
})
//DESTROY
router.delete("/:id", (req, res) => {
    const postId = req.params.id
    res.json("eliminiamo i dati dell'oggetto con id numero " + postId)
})
module.exports = router;