import { ERROR_INVALID_AGE } from "../errors/errors.js";

export default function verifyFieldAge(req, res, next) {
  const { idade } = req.body;

  if (typeof idade !== "string") {
    return res.status(400).json({ message: ERROR_INVALID_AGE });
  }

  const regex = /^\d{4}-\d{2}-\d{2}$/;

  const partes = idade.split("-");
  const ano = parseInt(partes[0], 10);
  const mes = parseInt(partes[1], 10);
  const dia = parseInt(partes[2], 10);

  const dataObj = new Date(ano, mes - 1, dia);

  if (
    idade.length !== 10 ||
    !regex.test(idade) ||
    dataObj.getFullYear() !== ano ||
    dataObj.getMonth() !== mes - 1 ||
    dataObj.getDate() !== dia
  ) {
    return res.status(400).json({ message: ERROR_INVALID_AGE });
  }

  next();
}
