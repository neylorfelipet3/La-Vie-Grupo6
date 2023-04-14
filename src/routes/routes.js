import { Router } from "express";
import {
  findAllAtendimentos,
  findOneAtendimentoById,
  insertAtendimento,
} from "../controllers/atendimentos/atendimentos.controllers.js";
import {
  deletePacienteById,
  findAllPacientes,
  findOnePacienteById,
  insertPacientes,
  updatePacienteById,
} from "../controllers/pacientes/pacientes.controller.js";
import {
  deletePsicologoById,
  findAllPsicologos,
  findOnePsicologoById,
  insertPsicologo,
  login,
  updatePsicologoById,
} from "../controllers/psicologos/psicologos.controllers.js";
import auth from "../middlewares/auth.middleware.js";
import verifyEmailAlreadyExists from "../middlewares/verify-email-already-exists.middleware.js";
import verifyFieldAge from "../middlewares/verify-field-age.middleware.js";
import verifyFieldBio from "../middlewares/verify-field-bio.middleware.js";
import verifyFieldDate from "../middlewares/verify-field-date.middleware.js";
import verifyFieldEmail from "../middlewares/verify-field-email.middleware.js";
import verifyFieldName from "../middlewares/verify-field-name.middleware.js";
import verifyFieldNotes from "../middlewares/verify-field-notes.middleware.js";
import verifyPassword from "../middlewares/verify-filed-password.middleware.js";
import verifyValidId from "../middlewares/verify-valid-id.middleware.js";
import { findAtendimentoByIdRepository } from "../repositories/atendimentos/atendimentos.repository.js";

const routes = Router();

// Rotas Pacientes
routes.post(
  "/pacientes",
  verifyFieldEmail,
  verifyEmailAlreadyExists,
  verifyFieldName,
  verifyFieldAge,
  insertPacientes
);
routes.get("/pacientes", findAllPacientes);
routes.get("/pacientes/:id", verifyValidId, findOnePacienteById);
routes.put(
  "/pacientes/:id",
  verifyValidId,
  verifyFieldEmail,
  verifyFieldName,
  verifyFieldAge,
  updatePacienteById
);
routes.delete("/pacientes/:id", verifyValidId, deletePacienteById);

// Rota Login Psicologo
routes.post("/login", verifyFieldEmail, verifyPassword, login);

// Rotas Psicologos
routes.post(
  "/psicologos",
  verifyFieldEmail,
  verifyEmailAlreadyExists,
  verifyFieldName,
  verifyPassword,
  verifyFieldBio,
  insertPsicologo
);
routes.get("/psicologos", auth, findAllPsicologos);
routes.get("/psicologos/:id", auth, verifyValidId, findOnePsicologoById);
routes.put(
  "/psicologos/:id",
  auth,
  verifyValidId,
  verifyFieldEmail,
  verifyFieldName,
  verifyPassword,
  verifyFieldBio,
  updatePsicologoById
);
routes.delete("/psicologos/:id", auth, verifyValidId, deletePsicologoById);

// Rotas Atendimentos
routes.post(
  "/atendimentos",
  auth,
  verifyFieldNotes,
  verifyFieldDate,
  verifyValidId,
  insertAtendimento
);
routes.get("/atendimentos", auth, findAllAtendimentos);
routes.get(
  "/atendimentos/:id",
  auth,
  findAtendimentoByIdRepository,
  findOneAtendimentoById
);

export default routes;
