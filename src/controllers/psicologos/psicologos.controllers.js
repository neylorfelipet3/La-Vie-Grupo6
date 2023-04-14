import jwt from "jsonwebtoken";
import formatPsicologoResponse from "../../core/utils/format-psicologo-response.js";
import {
  ERROR_DUPLICATE_EMAIL,
  ERROR_INVALID_CREDENCIALS,
} from "../../errors/errors.js";
import {
  createPsicologoRepository,
  deletePsicologoRepository,
  findAllPsicologosRepository,
  findPsicologoByEmail,
  findPsicologoById,
  updatePsicologoRepository,
} from "../../repositories/psicologos/psicologos.repository.js";

export const login = async (req, res) => {
  const { email, senha } = req.body;

  const psicologo = await findPsicologoByEmail(email);
  if (psicologo !== null) {
    const id = psicologo.id;
    const nome = psicologo.nome;

    if (senha === psicologo.senha) {
      const secret = "secret";

      const token = jwt.sign({ id, email, nome }, secret, { expiresIn: "1h" });

      return res.status(200).json({ token });
    }
  }

  res.status(401).json({ message: ERROR_INVALID_CREDENCIALS });
};

export const insertPsicologo = async (req, res) => {
  const { nome, email, senha, apresentacao } = req.body;

  const psicologo = await createPsicologoRepository(
    nome,
    email,
    senha,
    apresentacao
  );
  return res.status(201).json({ psicologo });
};

export const findAllPsicologos = async (req, res) => {
  const psicologos = await findAllPsicologosRepository();

  const formatPsicologos = psicologos.map((psicologo) => {
    return formatPsicologoResponse(psicologo);
  });

  return res.status(200).json(formatPsicologos);
};

export const findOnePsicologoById = async (req, res) => {
  const { id } = req.params;

  const psicologo = await findPsicologoById(id);

  return res.status(200).json({
    nome: psicologo.nome,
    email: psicologo.email,
    apresetacao: psicologo.apresentacao,
  });
};

export const updatePsicologoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;

    const psicologo = await findPsicologoByEmail(email);

    return psicologo !== null && id !== psicologo.id
      ? res.status(409).json({ err: ERROR_DUPLICATE_EMAIL(email) })
      : res
          .status(200)
          .json(
            await updatePsicologoRepository(
              id,
              nome,
              email,
              senha,
              apresentacao
            )
          );
  } catch (err) {
    console.error(err);
    return res.status(500).json({ err: "Erro interno do servidor." });
  }
};

export const deletePsicologoById = async (req, res) => {
  const { id } = req.params;

  try {
    await deletePsicologoRepository(id), res.status(204).send();
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({
        message:
          "Psicologo não pode ser excluido por estar referenciado em um atendimento",
      });
  }
};
