import {
  ERROR_NOT_EXIST_NOTES,
  ERROR_SIZE_NOTES,
  ERROR_TYPE_NOTES,
} from "../errors/errors.js";

export default function verifyFieldNotes(req, res, next) {
  const { observacao } = req.body;

  if (typeof observacao !== "string") {
    return res.status(400).json({ message: ERROR_TYPE_NOTES });
  }

  if (observacao.length < 1) {
    return res.status(400).json({ message: ERROR_NOT_EXIST_NOTES });
  }

  if (observacao.length > 700) {
    return res.status(400).json({ message: ERROR_SIZE_NOTES });
  }

  next();
}
