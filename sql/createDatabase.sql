-- Todo o processo de criação do database com seus diagramas: https://terrific-radar-712.notion.site/G6-DB-La-Vie-Sa-de-Mental-0614ea76239045bebf719c0109f3f112

CREATE DATABASE db_projeto_lavie2;

USE db_projeto_lavie2;

CREATE TABLE paciente (
id VARCHAR(50) NOT NULL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(70) NOT NULL UNIQUE, 
idade DATE
);

CREATE TABLE psicologo (
id VARCHAR(50) NOT NULL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(70) NOT NULL UNIQUE, 
senha VARCHAR(30) NOT NULL,
apresentacao TEXT
);

CREATE TABLE atendimento (
id VARCHAR(50) NOT NULL PRIMARY KEY,
paciente_id VARCHAR(50) NOT NULL,
psicologo_id VARCHAR(50) NOT NULL , 
data_atendimento DATE NOT NULL,
observacao TEXT,
CONSTRAINT atendimento_paciente FOREIGN KEY
			(paciente_id) REFERENCES paciente(id),
CONSTRAINT atendimento_psicologo FOREIGN KEY
			(psicologo_id) REFERENCES psicologo(id)
);