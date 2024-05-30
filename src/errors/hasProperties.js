function hasProperties(...properties) {
  return function (req, res, next) {
    if (!req.body.data) {
      const error = new Error('The request body must contain a "data" property.');
      error.status = 400;
      return next(error);
    }

    const { data } = req.body;
    try {
      properties.forEach((property) => {
        if (!data[property]) {
          const error = new Error(`A '${property}' property is required.`);
          error.status = 400;
          throw error;
        }
      });
      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = hasProperties;