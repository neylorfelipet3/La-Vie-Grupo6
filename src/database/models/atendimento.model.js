import { DataTypes } from "sequelize";
import { db } from "../db.js";
import { Paciente } from "./paciente.model.js";
import { Psicologo } from "./psicologo.model.js";

export const Atendimento = db.define(
  "atendimento",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    paciente_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Paciente,
        key: "id",
      },
    },
    psicologo_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Psicologo,
        key: "id",
      },
    },
    data_atendimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "atendimento",
  }
);

Paciente.hasMany(Atendimento, { foreignKey: "paciente_id" });
Atendimento.belongsTo(Paciente, { foreignKey: "paciente_id" });

Psicologo.hasMany(Atendimento, { foreignKey: "psicologo_id" });
Atendimento.belongsTo(Psicologo, { foreignKey: "psicologo_id" });
