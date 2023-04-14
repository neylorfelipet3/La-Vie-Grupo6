import {
  ERROR_NOT_EXIST_BIO,
  ERROR_SIZE_BIO,
  ERROR_TYPE_BIO,
} from "../errors/errors.js";

export default function verifyFieldBio(req, res, next) {
  const { apresentacao } = req.body;

  if (typeof apresentacao !== "string") {
    return res.status(400).json({ message: ERROR_TYPE_BIO });
  }

  if (apresentacao.length < 1) {
    return res.status(400).json({ message: ERROR_NOT_EXIST_BIO });
  }

  if (apresentacao.length > 700) {
    return res.status(400).json({ message: ERROR_SIZE_BIO });
  }

  next();
}
