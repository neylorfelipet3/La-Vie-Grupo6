import { ERROR_INVALID_ID } from "../errors/errors.js";
import { findAtendimentoByIdRepository } from "../repositories/atendimentos/atendimentos.repository.js";
import { findPacienteById } from "../repositories/pacientes/pacientes.repository.js";
import { findPsicologoById } from "../repositories/psicologos/psicologos.repository.js";

export default async function verifyValidId(req, res, next) {
  const { id } = req.params;
  const { url, method } = req;

  if (url == `/atendimentos/${id}` && method == "POST") {
    const paciente = await findPacienteById(id);

    if (!paciente) {
      return res.status(404).json({ err: ERROR_INVALID_ID });
    }
  }

  if (url == `/pacientes/${id}`) {
    const paciente = await findPacienteById(id);

    if (!paciente) {
      return res.status(404).json({ err: ERROR_INVALID_ID });
    }
  }

  if (url == `/psicologos/${id}`) {
    const psicologo = await findPsicologoById(id);

    if (!psicologo) {
      return res.status(404).json({ err: ERROR_INVALID_ID });
    }
  }

  if (url == `/atendimentos/${id}`) {
    const atendimento = await findAtendimentoByIdRepository(id);

    if (!atendimento) {
      return res.status(404).json({ err: ERROR_INVALID_ID });
    }
  }

  next();
}
