// filepath: Circular_economy_digital_hub/Circular_economy_digital_hub/backend/src/utils/index.js
const generateResponse = (status, message, data = null) => {
  return {
    status,
    message,
    data,
  };
};

const handleError = (error) => {
  console.error(error);
  return generateResponse(500, 'Internal Server Error');
};

const validateInput = (input, schema) => {
  const { error } = schema.validate(input);
  return error ? generateResponse(400, error.details[0].message) : null;
};

module.exports = {
  generateResponse,
  handleError,
  validateInput,
};