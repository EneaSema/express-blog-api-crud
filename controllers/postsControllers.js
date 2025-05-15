const posts = require("../data/posts.js");

const index = (req, res) => {
  res.status(200);
  res.json({
    description: "Post totali:" + posts.length,
    data: posts,
  });
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);

  if (!post) {
    res.status(404);
    res.json("Post non trovato ");
    return;
  }
  res.status(200);
  res.json({
    description: "Ecco il post scelto:" + id,
    data: post,
  });
};

const store = (req, res) => {
  console.log(req.body);

  const newId = posts[posts.length - 1].id + 1;
  const { title, text, img, tags } = req.body;

  const newPost = {
    id: newId,
    title: title,
    text: text,
    img: img,
    tags: tags,
  };

  posts.push(newPost);

  res.status(201);
  res.json({
    description: "Ecco il nuovo post creato: " + newId,
    data: posts,
  });
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  const postIndex = posts.indexOf(post);
  if (!post) {
    res.status(404);
    res.json("Post non trovato");
    return;
  }
  const { title, text, img, tags } = req.body;
  const postPut = {
    id: id,
    title: title,
    text: text,
    img: img,
    tags: tags,
  };
  posts.splice(postIndex, 1, postPut);
  console.log(postPut);
  res.status(201);
  res.json({
    description: "Ecco il post scelto per la modifica totale:" + id,
    data: postPut,
  });
};

const modify = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);

  if (!post) {
    res.status(404);
    res.json("Post non trovato");
    return;
  }
  res.status(200);
  res.json({
    description: "Ecco il post scelto per la parziale:" + id,
    data: posts,
  });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  if (!post) {
    res.status(404);
    res.json("Post non trovato");
  }

  const postIndex = posts.indexOf(post);
  console.log(postIndex);

  posts.splice(postIndex, 1);

  console.log(posts);
  console.log("________________");
  console.log(post);

  res.status(204);
  res.json("Ecco il post: " + id + " scelto è stato eliminato correttamente");
};

module.exports = { index, show, store, update, modify, destroy };
