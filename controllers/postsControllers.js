const posts = require("../data/posts.js");

const index = (req, res) => {
  res.statu(200);
  res.json({
    description: "Post totali:",
    data: posts,
  });
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);

  if (!post) {
    res.statu(404);
    res.json({
      error: "Not Found",
      messagge: "Post non trovato ",
    });
    return;
  }
  res.statu(200);
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

  res.statu(201);
  res.json({
    description: "Ecco il nuovo post creato: " + id,
    data: posts,
  });
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  const postIndex = posts.indexOf(post);
  if (!post) {
    res.statu(404);
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
    res.statu(404);
    res.json({
      error: "Not Found",
      messagge: "Post non trovato",
    });
    return;
  }
  res.statu(200);
  res.json({
    description: "Ecco il post scelto per la parziale:" + id,
  });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  if (!post) {
    res.statu(404);
    res.json({
      error: "Not Found",
      messagge: "Post non trovato",
    });
  }

  const postIndex = posts.indexOf(post);
  console.log(postIndex);

  posts.splice(postIndex, 1);

  console.log(posts);
  console.log("________________");
  console.log(post);
  res.statu(204);
  res.json({
    description:
      "Ecco il post: " + id + " scelto è stato eliminato correttamente",
  });
};

module.exports = { index, show, store, update, modify, destroy };
