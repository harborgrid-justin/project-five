module.exports = (err, req, res, next) => {
  console.error(`Error occurred during ${req.method} request to ${req.url} from ${req.headers['user-agent']}:`, err.stack);

  if (err.name === 'ValidationError') {
      return res.status(400).send({ message: 'Validation error occurred!' });
  }

  if (err.name === 'AuthenticationError') {
      return res.status(401).send({ message: 'Authentication error occurred!' });
  }

  // ... handle other specific error types as needed

  res.status(500).send({ message: 'An unexpected error occurred!' });
};
