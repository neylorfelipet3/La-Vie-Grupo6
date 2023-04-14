import { ERROR_DUPLICATE_EMAIL } from "../errors/errors.js";
import { findPacienteByEmail } from "../repositories/pacientes/pacientes.repository.js";
import { findPsicologoByEmail } from "../repositories/psicologos/psicologos.repository.js";

export default async function verifyEmailAlreadyExists(req, res, next) {
  const { email } = req.body;
  const { url } = req;

  if (url == "/pacientes") {
    const paciente = await findPacienteByEmail(email);

    if (paciente) {
      return res.status(409).json({ err: ERROR_DUPLICATE_EMAIL(email) });
    }
  }

  if (url == "/psicologos") {
    const psicologo = await findPsicologoByEmail(email);

    if (psicologo) {
      return res.status(409).json({ err: ERROR_DUPLICATE_EMAIL(email) });
    }
  }

  next();
}
