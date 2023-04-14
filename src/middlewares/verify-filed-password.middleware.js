import {
  ERROR_INVALID_PASSWORD_TYPE,
  ERROR_PASSWORD_SIZE,
} from "../errors/errors.js";

export default function verifyPassword(req, res, next) {
  const { senha } = req.body;
  
  if (typeof senha !== "string") {
    return res.status(400).json({ message: ERROR_INVALID_PASSWORD_TYPE });
  }

  if (senha.length < 6 || senha.length > 30) {
    return res.status(400).json({ message: ERROR_PASSWORD_SIZE });
  }

  next();
}
