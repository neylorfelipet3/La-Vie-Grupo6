import { ERROR_INVALID_EMAIL, ERROR_TYPE_EMAIL } from "../errors/errors.js";

export default function verifyFieldEmail(req, res, next) {
  const { email } = req.body;

  if (typeof email !== "string") {
    return res.status(400).json({ message: ERROR_TYPE_EMAIL });
  }

  const usuario = email.substring(0, email.indexOf("@"));
  const dominio = email.substring(email.indexOf("@") + 1, email.length);
  if (
    email.length > 70 ||
    usuario.length < 1 ||
    dominio.length < 3 ||
    usuario.search("@") != -1 ||
    dominio.search("@") != -1 ||
    usuario.search(" ") != -1 ||
    dominio.search(" ") != -1 ||
    dominio.search(".") == -1 ||
    dominio.indexOf(".") < 1 ||
    dominio.lastIndexOf(".") >= dominio.length - 1
  ) {
    return res.status(400).json({ message: ERROR_INVALID_EMAIL });
  }

  next();
}
