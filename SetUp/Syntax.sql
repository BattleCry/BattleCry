# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.19)
# Database: BC-Users
# Generation Time: 2014-07-24 23:09:30 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Attacks
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Attacks`;

CREATE TABLE `Attacks` (
  `ownedAttacks` varchar(400) NOT NULL,
  `CharacterID` int(100) DEFAULT NULL,
  `UserID` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Attacks` WRITE;
/*!40000 ALTER TABLE `Attacks` DISABLE KEYS */;

INSERT INTO `Attacks` (`ownedAttacks`, `CharacterID`, `UserID`)
VALUES
	('',NULL,NULL);

/*!40000 ALTER TABLE `Attacks` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table characters
# ------------------------------------------------------------

DROP TABLE IF EXISTS `characters`;

CREATE TABLE `characters` (
  `CharacterID` int(11) NOT NULL AUTO_INCREMENT,
  `characterName` varchar(40) NOT NULL DEFAULT '',
  `class` varchar(40) NOT NULL,
  `lvl` int(11) NOT NULL,
  `health` mediumint(20) NOT NULL,
  `essence` mediumint(20) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `gender` varchar(4) DEFAULT NULL,
  UNIQUE KEY `characterName` (`characterName`),
  UNIQUE KEY `CharacterID` (`CharacterID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;

INSERT INTO `characters` (`CharacterID`, `characterName`, `class`, `lvl`, `health`, `essence`, `UserID`, `gender`)
VALUES
	(9,'Dan','Warrior',1,1000,100,1,'Boy'),
	(12,'Don','Warrior',1,1000,100,1,'Girl'),
	(7,'Jacklen','Warrior',1,1000,100,33,'Girl'),
	(10,'Jake','Animalist',1,1000,100,1,'Boy'),
	(3,'Janet','Animalist',1,1000,100,1,'Girl'),
	(11,'Jennie','Bandit',1,1000,100,1,'Girl'),
	(1,'Jerico','Healer',1,1000,100,1,'Boy'),
	(15,'Jillian','Healer',1,1000,100,1,'Girl'),
	(8,'Jordan','Animalist',1,1000,100,33,'Boy'),
	(5,'Jullie','Healer',1,1000,100,33,'Girl'),
	(2,'Kaleb','Warrior',1,1000,100,1,'Boy'),
	(4,'Kelly','Bandit',1,1000,100,1,'Girl'),
	(13,'Ley Ley','Healer',1,1000,100,1,'Girl'),
	(16,'Paris','Bandit',1,1000,100,1,'Boy'),
	(6,'Rose','Bandit',1,1000,100,33,'Girl');

/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table chat
# ------------------------------------------------------------

DROP TABLE IF EXISTS `chat`;

CREATE TABLE `chat` (
  `msg` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;

INSERT INTO `chat` (`msg`)
VALUES
	('Welcome to Battle Cry this is the chat.. feel free to talk to others.');

/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Positions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Positions`;

CREATE TABLE `Positions` (
  `CharacterID` int(11) NOT NULL,
  `characterName` varchar(40) NOT NULL DEFAULT '',
  `class` varchar(40) NOT NULL,
  `health` mediumint(20) NOT NULL,
  `stamina` mediumint(20) NOT NULL,
  `gender` varchar(4) DEFAULT NULL,
  `x` int(11) DEFAULT NULL,
  `y` int(11) DEFAULT NULL,
  `z` int(11) DEFAULT NULL,
  `rot` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Positions` WRITE;
/*!40000 ALTER TABLE `Positions` DISABLE KEYS */;

INSERT INTO `Positions` (`CharacterID`, `characterName`, `class`, `health`, `stamina`, `gender`, `x`, `y`, `z`, `rot`)
VALUES
	(0,'','',0,0,NULL,0,0,0,NULL);

/*!40000 ALTER TABLE `Positions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(25) DEFAULT NULL,
  `username` varchar(25) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL,
  `pass` varchar(50) NOT NULL DEFAULT '',
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `fname`, `username`, `email`, `pass`)
VALUES
	(1,'Vladimir','FatPanda','vlad2ma@gmail.com','vladimir10'),
	(2,'Kirill','kirill2485','kirill@gmail.com','kirill2485'),
	(3,'undefined','undefined','undefined','undefined'),
	(5,'','','','12'),
	(33,'Vladimir','Sling2Program','vlad2ma','vladimir10'),
	(34,'Vladimir','qwd','qe','vlad');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Weapons
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Weapons`;

CREATE TABLE `Weapons` (
  `ownedWeapons` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
