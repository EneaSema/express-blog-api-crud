const express = require("express");
const post = express.Router();

const postController = require("../controllers/postsControllers.js");

// Risposta alla richiesta di lettura di tutti i post

post.get("/", postController.index);

// Risposta alla richiesta di lettura di un post specifico

post.get("/:id", postController.show);

// Risposta alla richiesta di creazione di un post

post.post("/", postController.store);

// Risposta alla richiesta di modifica totale di un post specifico

post.put("/:id", postController.update);

// Risposta alla richiesta di modifica parziale di un post specifico

post.patch("/:id", postController.modify);

// Risposta alla richiesta di elimazione di un post specifico

post.delete("/:id", postController.destroy);

module.exports = post;
