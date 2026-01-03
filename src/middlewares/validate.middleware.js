const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues
        .map((issue) => issue.message)
        .join(", ");

      const error = new Error(errors);
      error.statusCode = 400;
      return next(error);
    }

    // validated & sanitized data
    req.body = result.data;
    next();
  };
};

export default validate;
