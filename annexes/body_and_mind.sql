-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 09 sep. 2022 à 15:37
-- Version du serveur : 8.0.28
-- Version de PHP : 8.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `body_and_mind`
--

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

DROP TABLE IF EXISTS `messenger_messages`;
CREATE TABLE IF NOT EXISTS `messenger_messages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `body` longtext COLLATE utf8_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  KEY `IDX_75EA56E016BA31DB` (`delivered_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `module`
--

DROP TABLE IF EXISTS `module`;
CREATE TABLE IF NOT EXISTS `module` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `module`
--

INSERT INTO `module` (`id`, `name`, `slug`) VALUES
(1, 'Vendre des boissons', 'vendre-des-boissons'),
(2, 'Envoyer une newsletter', 'envoyer-une-newsletter'),
(3, 'Gérer le planning', 'gerer-le-planning'),
(4, 'Promotion de la salle', 'promotion-de-la-salle');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `partner_id` int DEFAULT NULL,
  `email` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `zipcode` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_activated` tinyint(1) NOT NULL,
  `is_verified` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `reset_token` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`),
  KEY `IDX_8D93D6499393F8FE` (`partner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `partner_id`, `email`, `roles`, `password`, `name`, `address`, `zipcode`, `city`, `is_activated`, `is_verified`, `created_at`, `slug`, `reset_token`) VALUES
(1, NULL, 'b&m.paris@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$aob1c01zTS3GVFMrsYhJeuaLsVgC/rEIgQ3DTkScAACIuM7E2Uv/y', 'B&M - PARIS', NULL, NULL, NULL, 1, 1, '2022-08-20 16:40:10', 'b-and-m-paris', NULL),
(2, NULL, 'b&m.marseille@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$0GpLp5yn4ciH7WDPcIBryO8c1cmcuDbKgiM0gXfo5QJeenzh8Afx6', 'B&M - MARSEILLE', NULL, NULL, NULL, 1, 1, '2022-08-20 16:42:52', 'b-and-m-marseille', NULL),
(3, NULL, 'b&m.lyon@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$XeZp9NVfIq3yz51j4YLFVOBZSNvF3xEqthVlCWnz036UjdqyoJ1P2', 'B&M - LYON', NULL, NULL, NULL, 1, 1, '2022-08-20 16:43:40', 'b-and-m-lyon', NULL),
(4, NULL, 'b&m.bordeaux@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$vVabTpTVM7N7XFT3zaAXq.YtrSXvTGxhJuDRnNljkCsX09EwIHjW6', 'B&M - BORDEAUX', NULL, NULL, NULL, 1, 1, '2022-08-20 16:44:19', 'b-and-m-bordeaux', NULL),
(8, 1, 'b&m.paris-sud@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$5AMrKeJK9W0pn5I3H5AMAu.sBGuyk4hYpQ5ga.hO3uORQK9uEWSuy', 'B&M - PARIS - Sud', 'PARIS Sud', '75000', 'PARIS', 1, 1, '2022-08-21 13:16:19', 'b-and-m-paris-sud', ''),
(12, NULL, 'admin@bodyandmind.fr', '[\"ROLE_ADMIN\"]', '$2y$13$A22vpGhbS9g85s/jbOgzA.RttX2GGxFeyjbgV4JokWJ2eGDL1dXgi', 'admin', NULL, NULL, NULL, 1, 0, '2022-08-22 07:53:23', 'admin', NULL),
(13, NULL, 'b&m.lille@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$/TqcR91mr532mi4J1TdAHOEyHEW7bjm2at19AjNxe0hgzC8Fg6lC.', 'B&M - LILLE', NULL, NULL, NULL, 1, 1, '2022-08-22 09:39:22', 'b-and-m-lille', NULL),
(14, NULL, 'b&m.nantes@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$L6ITdMyZtwoLn6MR7jmUkeGAxItch/GXpRpoRKKUxhsGsStR5mDS.', 'B&M - NANTES', NULL, NULL, NULL, 1, 0, '2022-08-22 09:42:03', 'b-and-m-nantes', NULL),
(15, NULL, 'b&m.rennes@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$OakrhPbU4iBa/NoOacVqUeBVEpYUAyGsTUBPyny6QvmyI5Kd3YHAS', 'B&M - RENNES', NULL, NULL, NULL, 1, 1, '2022-08-22 09:45:21', 'b-and-m-rennes', NULL),
(17, NULL, 'b&m.montpellier@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$vaoDIeI6TR.Us6HPO8qGsekGs8p1VePjdFnZeTYFAWfQSHvE.EVXe', 'B&M - MONTPELLIER', NULL, NULL, NULL, 0, 0, '2022-08-22 09:51:54', 'b-and-m-montpellier', NULL),
(18, NULL, 'b&m.pau@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$z33mDjb4mwMqWtma1nl1OettSBLSFbprVFzxJHRxcLfw4d8sjqOHy', 'B&M - PAU', NULL, NULL, NULL, 1, 0, '2022-08-22 09:54:42', 'b-and-m-pau', NULL),
(19, NULL, 'b&m.cannes@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$ew5yK8JEiDGKhkKqU7qzNugRbIdf9J6VsskJDNAr/NVGd1uK5rtuC', 'B&M - CANNES', NULL, NULL, NULL, 1, 1, '2022-08-22 09:55:51', 'b-and-m-cannes', 'w97qTuFhCSeJ6ag2A6J6e1UL2tUkwvAI1Gm8yrhmY0I'),
(20, NULL, 'b&m.nimes@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$NzGvGferK7t.UNI3/NzoqeEv4xG.b6vq9sc4O/cR01QSDzj/cqPGW', 'B&M - NIMES', NULL, NULL, NULL, 0, 0, '2022-08-22 11:15:21', 'b-and-m-nimes', NULL),
(21, NULL, 'b&m.caen@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$mHoJwQrzgiLIV2MdCAeiqOpody76rDFMzfCBJKij6gqUgKQf7iEnO', 'B&M - CAEN', NULL, NULL, NULL, 1, 1, '2022-08-22 11:17:13', 'b-and-m-caen', NULL),
(22, NULL, 'b&m.limoges@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$QklyvlpZb2w2Oi1I7acvTO9mioE.fUK2cRUqyyy4hC6SnaQ2VcICm', 'B&M - LIMOGES', NULL, NULL, NULL, 0, 1, '2022-08-22 11:21:07', 'b-and-m-limoges', NULL),
(23, NULL, 'b&m.annecy@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$2LDFsjmQErxTOrIa7bbsJ.Tn4vg/I7VUB6sfqpOymaU3KjvfUH6Ja', 'B&M - ANNECY', NULL, NULL, NULL, 0, 1, '2022-08-22 11:24:12', 'b-and-m-annecy', ''),
(24, 2, 'b&m.marseille-nord@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$5cPjvZ9YDxVuKCt2wSdAs.BVKz/hLLX8adGsvqV4.rg.UTCYp83Au', 'B&M - MARSEILLE - Nord', 'MARSEILLE Nord', '13000', 'MARSEILLE', 1, 1, '2022-08-22 11:29:58', 'b-and-m-marseille-nord', ''),
(25, 2, 'b&m.marseille-sud@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$oSVdmYhXsP7d7OeKUNfKCO4DBJCIOjLN1duZKpO9eUniOZIwentHu', 'B&M - MARSEILLE - Sud', 'MARSEILLE Sud', '13000', 'MARSEILLE', 1, 1, '2022-08-22 11:32:44', 'b-and-m-marseille-sud', ''),
(26, 3, 'b&m.lyon-nord@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$L1xv1QTP5gGbYJeTHxjzk.Thi8R5zsB7NhFF.CAHbCDXvz.mLcxb.', 'B&M - LYON - Nord', 'Lyon Nord', '69000', 'LYON', 1, 0, '2022-08-23 12:47:24', 'b-and-m-lyon-nord', NULL),
(27, 3, 'b&m.lyon-sud@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$L4Bc22ucoyNG/CNtopdDqOebbMYHUB/sxbLh/8K/3X9ZuoD3TQDBm', 'B&M - LYON - Sud', 'Lyon Sud', '69000', 'LYON', 1, 0, '2022-08-23 12:52:51', 'b-and-m-lyon-sud', NULL),
(28, 3, 'b&m.lyon-est@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$50s42TPNGLUM2tQgeqrGCOLwWhjeW0RpO2car5JoNAxtESwLYA5SK', 'B&M - LYON - Est', 'Lyon Est', '69000', 'LYON', 1, 0, '2022-08-23 12:54:32', 'b-and-m-lyon-est', NULL),
(29, 4, 'b&m.bordeaux-nord@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$Mh12AVG6Q1uw6g2t2PsjTuay8jTl1nYUbhLPWcfkqt/MqFWBxC9vC', 'B&M - BORDEAUX - Nord', 'Bordeaux Nord', '33000', 'BORDEAUX', 1, 1, '2022-08-23 13:01:30', 'b-and-m-bordeaux-nord', NULL),
(30, 4, 'b&m.bordeaux-sud@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$abK.qeWyVl4McNLl4BZ1qOs7qT5Y6z79Cca0Co1epUhiKOPoAtpma', 'B&M - BORDEAUX - Sud', 'Bordeaux Sud', '33000', 'BORDEAUX', 0, 0, '2022-08-23 13:02:25', 'b-and-m-bordeaux-sud', NULL),
(31, 13, 'b&m.lille-nord@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$7mY1.thO1Nf2I8nM/noabuctVbWSSzN5vk9VdzpNFaHgzJiKpp9u6', 'B&M - LILLE - Nord', 'LILLE Nord', '59000', 'LILLE', 0, 0, '2022-08-23 13:11:46', 'b-and-m-lille-nord', NULL),
(32, 13, 'b&m.lille-sud@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$b4V0rtM00KyIPm.YcbgoWOyWdiMM3CjJ.9DwmqzaBOflutwNxxCnm', 'B&M - LILLE - Sud', 'LILLE Sud', '59000', 'LILLE', 0, 0, '2022-08-23 13:12:31', 'b-and-m-lille-sud', NULL),
(33, 13, 'b&m.lille-est@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$6QSz/ygNSfXHFzDH0IQZqOW4I2R7uwMIBb2jowC6iei6VMCyvN3uy', 'B&M - LILLE - Est', 'LILLE Est', '59000', 'LILLE', 0, 0, '2022-08-23 13:12:58', 'b-and-m-lille-est', NULL),
(34, 21, 'b&m.caen-nord@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$A0VyGptjSxRPCqNITAH6JuVBlFp8L3ejkNCkjegZdrJUDrstBELZC', 'B&M - CAEN - Nord', 'Caen Nord', '14000', 'CAEN', 0, 0, '2022-08-23 13:14:53', 'b-and-m-caen-nord', NULL),
(40, 15, 'b&m.rennes-nord@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$bFcB1NbK3glZ3cH38NKwGeVdsg6nMxG6suL9jKPs8OjdehC0E8pOS', 'B&M - RENNES - Nord', 'Rennes Nord', '35000', 'RENNES', 1, 0, '2022-08-24 07:47:26', 'b-and-m-rennes-nord', NULL),
(41, 15, 'b&m.rennes-sud@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$pl89vCU9k8a1ju2TltFeHOTo/q4KAH96q/oITyu/cvwx13KnD6HTq', 'B&M - RENNES - Sud', 'Rennes Sud', '35000', 'RENNES', 1, 0, '2022-08-24 07:49:55', 'b-and-m-rennes-sud', NULL),
(48, NULL, 'b&m.nice@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$JHFyPsPm22ugdUhgBjXkC.VVb8gZFqTOr3rVHV/Rl/XdpxGvRQh2S', 'B&M - NICE', NULL, NULL, NULL, 1, 0, '2022-08-27 14:19:22', 'b-and-m-nice', NULL),
(49, 1, 'b&m.paris-nord@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$xofr0ALBzfG790jDMc8yPun7Arx9dQszUQVPtx765xW067OyHF.8m', 'B&M - PARIS - Nord', 'Paris Nord', '75000', 'PARIS', 1, 0, '2022-08-27 14:21:00', 'b-and-m-paris-nord', NULL),
(50, 1, 'b&m.paris-est@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$qL7h/DAp.yjCMRAAvA7Lo.rTskAWY7UNh6EY1tb77HXIZKtOi9xhK', 'B&M - PARIS - Est', NULL, NULL, NULL, 1, 0, '2022-08-27 14:21:27', 'b-and-m-paris-est', NULL),
(51, 1, 'b&m.paris-ouest@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$wnPQSOmicEueA.ysq0jf5.nG9WkpmNZOPtCMmODjL1wkNAxmf6GBq', 'B&M - PARIS - Ouest', 'Paris Ouest', '75000', 'PARIS', 0, 0, '2022-08-27 14:22:10', 'b-and-m-paris-ouest', NULL),
(55, 3, 'b&m.lyon-ouest@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$IzTlIZ.86WyWa92rEML4pO1NxW0KtHZLPf6foo7nSLYU9fY9okMJS', 'B&M - LYON- Ouest', 'LYON Ouest', '69000', 'LYON', 1, 0, '2022-09-02 14:23:54', 'b-and-m-lyon-ouest', NULL),
(57, NULL, 'b&m.brest@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$.jeP5/jKx/Upd7t2XqbDDefKRWNPxNgQGHIZ2jZOF4TkjEnSRry0e', 'B&M - BREST', NULL, NULL, NULL, 1, 1, '2022-09-06 08:21:29', 'b-and-m-brest', NULL),
(58, 57, 'b&m.brest-nord@bodyandmind.fr', '[\"ROLE_STRUCTURE\"]', '$2y$13$O7B9L9EstCrimGvLpXl0.O9RHbG0rkMN7oT3vWRELztJa8nA6rIIK', 'B&M - BREST - Nord', 'BREST Nord', '29000', 'BREST', 1, 1, '2022-09-06 08:25:58', 'b-and-m-brest-nord', NULL),
(59, NULL, 'b&m.antibes@bodyandmind.fr', '[\"ROLE_PARTNER\"]', '$2y$13$4UyxKY735StZ.ZKLmYOhkeakno/3YOtjJNZGg0WfdvxudhLDHK6ya', 'B&M - ANTIBES', NULL, NULL, NULL, 1, 1, '2022-09-06 08:30:19', 'b-and-m-antibes', '');

-- --------------------------------------------------------

--
-- Structure de la table `user_module`
--

DROP TABLE IF EXISTS `user_module`;
CREATE TABLE IF NOT EXISTS `user_module` (
  `user_id` int NOT NULL,
  `module_id` int NOT NULL,
  `is_activated` tinyint(1) NOT NULL,
  PRIMARY KEY (`user_id`,`module_id`),
  KEY `IDX_69763D15A76ED395` (`user_id`),
  KEY `IDX_69763D15AFC2B591` (`module_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `user_module`
--

INSERT INTO `user_module` (`user_id`, `module_id`, `is_activated`) VALUES
(1, 1, 0),
(1, 2, 0),
(1, 3, 0),
(1, 4, 1),
(2, 1, 1),
(2, 2, 1),
(2, 3, 1),
(2, 4, 1),
(3, 1, 0),
(3, 2, 1),
(3, 3, 1),
(3, 4, 1),
(4, 1, 0),
(4, 2, 1),
(4, 3, 0),
(4, 4, 1),
(8, 1, 1),
(8, 2, 1),
(8, 3, 1),
(8, 4, 1),
(13, 1, 1),
(13, 2, 1),
(13, 3, 1),
(13, 4, 1),
(14, 1, 1),
(14, 2, 1),
(14, 3, 1),
(14, 4, 1),
(15, 1, 1),
(15, 2, 1),
(15, 3, 1),
(15, 4, 1),
(17, 1, 1),
(17, 2, 1),
(17, 3, 1),
(17, 4, 1),
(18, 1, 1),
(18, 2, 1),
(18, 3, 1),
(18, 4, 1),
(19, 1, 1),
(19, 2, 1),
(19, 3, 1),
(19, 4, 1),
(20, 1, 1),
(20, 2, 1),
(20, 3, 1),
(20, 4, 1),
(21, 1, 1),
(21, 2, 1),
(21, 3, 1),
(21, 4, 1),
(22, 1, 1),
(22, 2, 1),
(22, 3, 1),
(22, 4, 1),
(23, 1, 0),
(23, 2, 1),
(23, 3, 1),
(23, 4, 1),
(24, 1, 1),
(24, 2, 1),
(24, 3, 1),
(24, 4, 1),
(25, 1, 1),
(25, 2, 1),
(25, 3, 1),
(25, 4, 1),
(26, 1, 1),
(26, 2, 1),
(26, 3, 1),
(26, 4, 1),
(27, 1, 1),
(27, 2, 1),
(27, 3, 1),
(27, 4, 1),
(28, 1, 1),
(28, 2, 1),
(28, 3, 1),
(28, 4, 1),
(29, 1, 0),
(29, 2, 0),
(29, 3, 0),
(29, 4, 1),
(30, 1, 0),
(30, 2, 0),
(30, 3, 0),
(30, 4, 1),
(31, 1, 1),
(31, 2, 1),
(31, 3, 1),
(31, 4, 1),
(32, 1, 1),
(32, 2, 1),
(32, 3, 1),
(32, 4, 1),
(33, 1, 1),
(33, 2, 1),
(33, 3, 1),
(33, 4, 1),
(34, 1, 1),
(34, 2, 1),
(34, 3, 1),
(34, 4, 1),
(40, 1, 1),
(40, 2, 1),
(40, 3, 1),
(40, 4, 1),
(41, 1, 1),
(41, 2, 1),
(41, 3, 1),
(41, 4, 1),
(48, 1, 1),
(48, 2, 1),
(48, 3, 1),
(48, 4, 1),
(49, 1, 1),
(49, 2, 1),
(49, 3, 0),
(49, 4, 0),
(50, 1, 1),
(50, 2, 1),
(50, 3, 0),
(50, 4, 0),
(51, 1, 1),
(51, 2, 1),
(51, 3, 0),
(51, 4, 0),
(55, 1, 1),
(55, 2, 1),
(55, 3, 1),
(55, 4, 1),
(57, 1, 1),
(57, 2, 1),
(57, 3, 1),
(57, 4, 1),
(58, 1, 1),
(58, 2, 1),
(58, 3, 1),
(58, 4, 1),
(59, 1, 1),
(59, 2, 1),
(59, 3, 1),
(59, 4, 1);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_8D93D6499393F8FE` FOREIGN KEY (`partner_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `user_module`
--
ALTER TABLE `user_module`
  ADD CONSTRAINT `FK_69763D15A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_69763D15AFC2B591` FOREIGN KEY (`module_id`) REFERENCES `module` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
