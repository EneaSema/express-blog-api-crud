const errorNotFound = (req, res, next) => {
  res.status(404);
  const error = {
    error: res.json("Pagina non trovata"),
  };
  return error;
};

module.exports = errorNotFound;
