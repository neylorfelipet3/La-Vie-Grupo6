import { ERROR_SIZE_NAME, ERROR_TYPE_NAME } from "../errors/errors.js";

export default function verifyFieldName(req, res, next) {
  const { nome } = req.body;

  if (typeof nome !== "string") {
    return res.status(400).json({ message: ERROR_TYPE_NAME });
  }

  if (nome.length < 3 || nome.length > 100) {
    return res.status(400).json({ message: ERROR_SIZE_NAME });
  }

  next();
}
