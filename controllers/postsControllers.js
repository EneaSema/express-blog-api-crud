const { posts } = require("../data/posts.js");
const post = require("../routers/postsRouter.js");

const index = (req, res) => {
  res.json({
    status: 200,
    description: "Post totali",
    data: posts,
  });
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);

  if (!post) {
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
};

const store = (req, res) => {
  res.send("Ecco il nuovo post creato");

  if (!post) {
    return res.json({
      status: 404,
      error: "Not Found",
      messagge: "Post non trovato",
    });
  }
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  res.send("Ecco il post scelto per la modifica totale:" + id);

  if (!post) {
    return res.json({
      status: 404,
      error: "Not Found",
      messagge: "Post non trovato",
    });
  }
};

const modify = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  res.send("Ecco il post scelto per la modifica parziale:" + id);

  if (!post) {
    return res.json({
      status: 404,
      error: "Not Found",
      messagge: "Post non trovato",
    });
  }
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  res.send("Ecco il post scelto per eliminazione:" + id);
  if (!post) {
    return res.json({
      status: 404,
      error: "Not Found",
      messagge: "Post non trovato",
    });
  }
  post.splice(posts.indexOf(post), 1);
  console.log(posts);
  res.sendStatus(204);
};

module.exports = { index, show, store, update, modify, destroy };
