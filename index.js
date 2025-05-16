// console.log("ciao");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const postRouter = require("./routers/postsRouter.js");
const errorNotFound = require("./middlewares/middlewareNotFound.js");
const errorsHandler = require("./middlewares/middlewareError.js");

app.get("/", (req, res) => {
  console.log("Richiesta arrivata New");

  res.send("Server del mio blog");
});

app.use("/posts", postRouter);
app.use(express.static("public"));
app.use(errorNotFound);
app.use(errorsHandler);

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    return;
  } else {
    console.log(`Example app listening on port ${port}`);
  }
});
