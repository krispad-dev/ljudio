export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
    });

    return next();
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
