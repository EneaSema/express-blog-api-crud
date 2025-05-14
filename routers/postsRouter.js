const express = require("express");
const post = express.Router();
const { posts } = require("../data/posts.js");

// Risposta alla richiesta di lettura di tutti i post

post.get("/", (req, res) => {
  res.json({
    status: 200,
    description: "Post totali",
    data: posts,
  });
});

// Risposta alla richiesta di lettura di un post specifico

post.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);

  if (!currentPost) {
    return res.json({
      status: 404,
      error: "Not Found",
      messagge: "Post non trovato",
    });
  }
  res.json({
    status: 200,
    description: "Ecco il post scelto:" + id,
    data: post[id],
  });
});

// Risposta alla richiesta di creazione di un post

post.post("/", (req, res) => {
  res.send("Ecco il nuovo post creato");

  if (!currentPost) {
    return res.json({
      status: 404,
      error: "Not Found",
      messagge: "Post non trovato",
    });
  }
});

// Risposta alla richiesta di modifica totale di un post specifico

post.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  res.send("Ecco il post scelto per la modifica totale:" + id);

  if (!currentPost) {
    return res.json({
      status: 404,
      error: "Not Found",
      messagge: "Post non trovato",
    });
  }
});

// Risposta alla richiesta di modifica parziale di un post specifico

post.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  res.send("Ecco il post scelto per la modifica parziale:" + id);

  if (!currentPost) {
    return res.json({
      status: 404,
      error: "Not Found",
      messagge: "Post non trovato",
    });
  }
});

// Risposta alla richiesta di elimazione di un post specifico

post.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  res.send("Ecco il post scelto per eliminazione:" + id);
  if (!currentPost) {
    return res.json({
      status: 404,
      error: "Not Found",
      messagge: "Post non trovato",
    });
  }
  post.splice(posts.indexOf(post), 1);
  console.log(posts);
  res.sendStatus(204);
});

module.exports = post;
