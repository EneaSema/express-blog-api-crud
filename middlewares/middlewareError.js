const errorsHandler = (err, req, res, next) => {
  res.status(500);
  res, json("Errore richiesta");
};

module.exports = errorsHandler;
