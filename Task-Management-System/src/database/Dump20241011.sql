-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mysql2
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `folders`
--

DROP TABLE IF EXISTS folders;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE folders (
  uniqueId int NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL,
  startDate datetime NOT NULL,
  userId int DEFAULT NULL,
  PRIMARY KEY (uniqueId),
  KEY userId (userId),
  CONSTRAINT folders_ibfk_1 FOREIGN KEY (userId) REFERENCES users (uniqueId)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `folders`
--

LOCK TABLES folders WRITE;
/*!40000 ALTER TABLE folders DISABLE KEYS */;
INSERT INTO folders VALUES (1,'Work','2024-10-01 10:00:00',1),(2,'Personal','2024-10-02 11:30:00',2),(3,'Projects','2024-10-03 09:45:00',3);
/*!40000 ALTER TABLE folders ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS tasks;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE tasks (
  uniqueId int NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL,
  `description` text,
  priority enum('Low','Medium','High') NOT NULL,
  startDate datetime NOT NULL,
  deadline datetime NOT NULL,
  `status` enum('Pending','InProgress','Completed') NOT NULL,
  userId int DEFAULT NULL,
  toDoListId int DEFAULT NULL,
  PRIMARY KEY (uniqueId),
  KEY userId (userId),
  KEY toDoListId (toDoListId),
  CONSTRAINT tasks_ibfk_1 FOREIGN KEY (userId) REFERENCES users (uniqueId),
  CONSTRAINT tasks_ibfk_2 FOREIGN KEY (toDoListId) REFERENCES todolist (uniqueId)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES tasks WRITE;
/*!40000 ALTER TABLE tasks DISABLE KEYS */;
INSERT INTO tasks VALUES (1,'Prepare Presentation','Create slides for the meeting','High','2024-10-01 11:00:00','2024-10-05 09:00:00','InProgress',1,1),(2,'Buy Milk','Get milk and bread','Medium','2024-10-02 12:30:00','2024-10-02 15:00:00','Pending',2,2),(3,'Review Codebase','Review and update the legacy code','High','2024-10-03 11:00:00','2024-10-06 18:00:00','Pending',3,3);
/*!40000 ALTER TABLE tasks ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `todolist`
--

DROP TABLE IF EXISTS todolist;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE todolist (
  uniqueId int NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL,
  startDate datetime NOT NULL,
  folderId int DEFAULT NULL,
  PRIMARY KEY (uniqueId),
  KEY folderId (folderId),
  CONSTRAINT todolist_ibfk_1 FOREIGN KEY (folderId) REFERENCES folders (uniqueId)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todolist`
--

LOCK TABLES todolist WRITE;
/*!40000 ALTER TABLE todolist DISABLE KEYS */;
INSERT INTO todolist VALUES (1,'Meeting Notes','2024-10-01 10:30:00',1),(2,'Grocery List','2024-10-02 12:00:00',2),(3,'Code Review','2024-10-03 10:00:00',3);
/*!40000 ALTER TABLE todolist ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS users;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE users (
  uniqueId int NOT NULL AUTO_INCREMENT,
  username varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  phoneNumber varchar(15) DEFAULT NULL,
  PRIMARY KEY (uniqueId),
  UNIQUE KEY email (email)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES users WRITE;
/*!40000 ALTER TABLE users DISABLE KEYS */;
INSERT INTO users VALUES (1,'Ahmed','ahmed@example.com','password123','+201234567890'),(2,'Sara','sara@example.com','password456','+201987654321'),(3,'John','john@example.com','password789','+201123456789');
/*!40000 ALTER TABLE users ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-11  2:14:15
