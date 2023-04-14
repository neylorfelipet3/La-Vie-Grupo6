import { randomUUID } from "node:crypto";
import { Atendimento } from "../../database/models/atendimento.model.js";

export const createAtendimentoRepository = async (
  paciente_id,
  psicologo_id,
  data_atendimento,
  observacao
) => {
  return await Atendimento.create({
    id: randomUUID(),
    paciente_id,
    psicologo_id,
    data_atendimento,
    observacao,
  });
};

export const findAllAtendimentosRepository = async () => {
  return await Atendimento.findAll();
};

export const findAtendimentoByIdRepository = async (id) => {
  const atendimento = await Atendimento.findOne({ where: { id } });

  return atendimento;
};