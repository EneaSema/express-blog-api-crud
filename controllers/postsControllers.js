const posts = require("../data/posts.js");

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
      messagge: "Post non trovato ",
    });
  }
  res.json({
    status: 200,
    description: "Ecco il post scelto:" + id,
    data: post,
  });
};

const store = (req, res) => {
  res.json({
    status: 200,
    description: "Ecco il nuovo post creato",
  });
};

const update = (req, res) => {
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
    description: "Ecco il post scelto per la modifica totale:" + id,
  });
};

const modify = (req, res) => {
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
    description: "Ecco il post scelto per la parziale:" + id,
  });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const newPost = posts.find((currentPost) => currentPost.id === id);
  if (!newPost) {
    return res.json({
      status: 404,
      error: "Not Found",
      messagge: "Post non trovato",
    });
  }

  posts.splice(posts.indexOf(newPost), 1);

  console.log(posts);
  console.log(newPost);
  res.json({
    description: "Ecco il post scelto per eliminazione:" + id,
    status: 204,
    data: newPost,
  });
};

module.exports = { index, show, store, update, modify, destroy };
