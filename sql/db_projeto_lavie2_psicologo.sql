-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: db_projeto_lavie2
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `psicologo`
--

DROP TABLE IF EXISTS `psicologo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psicologo` (
  `id` varchar(50) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(70) NOT NULL,
  `senha` varchar(30) NOT NULL,
  `apresentacao` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psicologo`
--

LOCK TABLES `psicologo` WRITE;
/*!40000 ALTER TABLE `psicologo` DISABLE KEYS */;
INSERT INTO `psicologo` VALUES ('8e4f9414-5eba-4c8f-9b15-6f16e1187c0b','Mariana Goulart','mare@gmail.com','123f5678','Especialista em Terapia Comportamental e utiliza gatos seus sessoes'),('8ecaf708-ad49-4872-9e82-d13cc576480e','Mariana Goulart','mari@a.com','123456','Especialista em Terapia Comportamental e utiliza gatos seus sessoes'),('9edaca84-b790-4e9e-88af-16f7209ab9e9','Mariana Goulart','maredvdbbgdedediana@gmail.com','123f45678','Especialista em Terapia Comportamental e utiliza gatos seus sessoes'),('ad0acb46-2d53-49bd-a543-8df05e926ec2','Mariana Goulart','maeeeeri@a.com','123456','Especialista em Terapia Comportamental e utiliza gatos seus sessoes'),('cb9f1dfb-a14b-44b9-bdaf-b5dd0a975c6e','Mariana Goulart','mariana@gmail.com','12345678','Especialista em Terapia Comportamental e utiliza gatos seus sessoes'),('ef74eac7-9d2a-4666-868c-e637838ae881','Mariana Goulart','mrpe@gmail.com','123f58','Especialista em Terapia Comportamental e utiliza gatos seus sessoes'),('f0e5077c-2d7b-4f38-99de-a404500bbbcb','Mariana Goulart','mariana1@gmail.com','123456','Especialista em Terapia Comportamental e utiliza gatos seus sessoes');
/*!40000 ALTER TABLE `psicologo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-17  4:22:53
