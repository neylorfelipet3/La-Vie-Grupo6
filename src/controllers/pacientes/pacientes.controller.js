import { ERROR_DUPLICATE_EMAIL } from "../../errors/errors.js";
import {
  createPacienteRepository,
  deletePacienteRepository,
  findAllPacientesRepository,
  findPacienteByEmail,
  findPacienteById,
  updatePacienterepository,
} from "../../repositories/pacientes/pacientes.repository.js";

export const insertPacientes = async (req, res) => {
  const { nome, email, idade } = req.body;

  const paciente = await createPacienteRepository(nome, email, idade);

  return res.status(201).json({ paciente });
};

export const findAllPacientes = async (req, res) => {
  const pacientes = await findAllPacientesRepository();

  return res.status(200).json({ pacientes });
};

export const findOnePacienteById = async (req, res) => {
  const { id } = req.params;

  const paciente = await findPacienteById(id);

  return res.status(200).json({ paciente });
};

export const updatePacienteById = async (req, res) => {
  const { id } = req.params;
  const { nome, email, idade } = req.body;

  const paciente = await findPacienteByEmail(email);

  if (paciente !== null) {
    if (id !== paciente.id) {
      return res.status(409).json({ err: ERROR_DUPLICATE_EMAIL(email) });
    }
  } else {
    const pacienteAtualizado = await updatePacienterepository(
      id,
      nome,
      email,
      idade
    );

    return res.status(200).json(pacienteAtualizado);
  }
};

export const deletePacienteById = async (req, res) => {
  const { id } = req.params;

  try {
    await deletePacienteRepository(id), res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Paciente não pode ser excluido por estar referenciado em um atendimento"})
  }
};
