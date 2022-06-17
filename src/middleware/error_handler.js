const error_handler = () => {
  return {
    error_message: error,
    message,
    code_status,
  };
};

module.exports = {
  error_handler,
};
