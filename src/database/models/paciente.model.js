import { DataTypes } from "sequelize";
import { db } from "../db.js";

export const Paciente = db.define(
  "paciente",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idade: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "paciente",
  }
);

Paciente.associate = function (models) {
  Paciente.hasMany(models.Atendimento, { foreignKey: "paciente_id" });
};
