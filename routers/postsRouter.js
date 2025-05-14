const express = require("express");
const post = express.Router();

const posts = [
  {
    title: "title-1",
    text: "Simbolo di fierezza è nobiltà",
    img: "/images/lupo.jpg",
    tags: ["animale", "leader", "fierezza", "nobiltà", "orgoglio"],
  },
  {
    title: "title-2",
    text: "Strumento per poter imparare gratuitamente",
    img: "/images/youtube.jpg",
    tags: ["tutorial", "gratis", "imparare", "migliorare", "formazione"],
  },
  {
    title: "title-3",
    text: "Passione Manga ed Anime",
    img: "/images/escanor.jpg",
    tags: ["manga", "anime", "svago", "passatempo", "fantasticare"],
  },
  {
    title: "title-4",
    text: "Danza Latino Americano",
    img: "/images/bachata.jpg",
    tags: ["danza", "musica", "energia", "piacere", "divertimento"],
  },
  {
    title: "title-",
    text: "Squadra del cuore",
    img: "/images/ac-milan-logo.jpg",
    tags: ["calcio", "rossonero", "il diavolo", "milano", "champions league"],
  },
];

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
    data: post,
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
});

module.exports = post;
