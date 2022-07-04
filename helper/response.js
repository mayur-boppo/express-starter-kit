const response = (res, statusCode, status, message, data = {}, error = {}) => {
  let responseMessage = {};
  responseMessage.status = status;
  if (data) {
    responseMessage.data;
  }
  if (error) {
    responseMessage.error;
  }
  responseMessage.error.message = message;
  res.status(statusCode).send(responseMessage);
};

module.exports = { response };
