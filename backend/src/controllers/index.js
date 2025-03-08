// This file exports controller functions that handle requests and responses for various routes.

const exampleController = (req, res) => {
  res.send('Example response from the controller');
};

module.exports = {
  exampleController,
};