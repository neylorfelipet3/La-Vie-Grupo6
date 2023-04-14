import { randomUUID } from "node:crypto";
import { Psicologo } from "../../database/models/psicologo.model.js";

export const createPsicologoRepository = async (
  nome,
  email,
  senha,
  apresentacao
) => {
  return await Psicologo.create({
    id: randomUUID(),
    nome,
    email,
    senha,
    apresentacao,
  });
};

export const findAllPsicologosRepository = async () => {
  return await Psicologo.findAll();
};

export const findPsicologoById = async (id) => {
  const psicologo = await Psicologo.findOne({ where: { id } });

  return psicologo;
};

export const updatePsicologorepository = async (id, nome, email, senha, apresentacao) => {
  await Psicologo.update({ nome, email, senha, apresentacao }, { where: { id } });

  return await Psicologo.findOne({ where: { id } });
};

export const deletePsicologoRepository = async (id) => {
  return await Psicologo.destroy({ where: { id } });
};

export const findPsicologoByEmail = async (email) => {
  const psicologo = await Psicologo.findOne({ where: { email } });

  return psicologo;
};

// export const findAllPsicologosRepository = async () => {
//   return await Psicologo.findAll();
// };

// export const findPsicologoById = async (id) => {
//   const psicologo = await Psicologo.findOne({ where: { id } });

//   return psicologo;
// };

export const updatePsicologoRepository = async (
  id,
  nome,
  email,
  senha,
  apresentacao
) => {
  await Psicologo.update(
    { nome, email, senha, apresentacao },
    { where: { id } }
  );

  return await Psicologo.findOne({ where: { id } });
};

// export const deletePsicologoRepository = async (id) => {
//   return await Psicologo.destroy({ where: { id } });
// }
