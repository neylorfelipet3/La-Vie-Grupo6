import { ERROR_INVALID_DATE } from "../errors/errors.js";

export default function verifyFieldDate(req, res, next) {
  const { data_atendimento } = req.body;

  if (typeof data_atendimento !== "string") {
    return res.status(400).json({ message: ERROR_INVALID_DATE });
  }

  const regexData =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;


  if (!regexData.test(data_atendimento)) {
    return res.status(400).json({ message: ERROR_INVALID_DATE });
  }

  next();
}
