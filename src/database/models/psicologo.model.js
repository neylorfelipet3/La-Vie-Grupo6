import { DataTypes } from "sequelize";
import { db } from "../db.js";

export const Psicologo = db.define(
  "psicologo",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apresentacao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "psicologo",
  }
);

Psicologo.associate = function (models) {
  Psicologo.hasMany(models.Atendimento, { foreignKey: "psicologo_id" });
};
