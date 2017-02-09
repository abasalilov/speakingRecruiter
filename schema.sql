-- ---
-- Globals
-- ---
-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;
-- ---
-- Table 'User'
--
-- ---

DROP TABLE IF EXISTS user;

CREATE TABLE user (
    username    VARCHAR(30)     NOT NULL,
    id          INTEGER         auto_increment   NOT NULL,
    first_name  VARCHAR(14)     NOT NULL,
    last_name   VARCHAR(16)     NOT NULL,
    email_address VARCHAR(100)  NOT NULL,
    PRIMARY KEY (id)
);


-- ---
-- Table 'lessons'
--
DROP TABLE IF EXISTS lessons;

CREATE TABLE lessons
             (
                          lessonId          INTEGER         auto_increment   NOT NULL,
                          title VARCHAR(100) NULL DEFAULT NULL,
                          summary VARCHAR(10000) NULL DEFAULT NULL,
                          content VARCHAR(10000) NULL DEFAULT NULL,
                          PRIMARY KEY (lessonId)
             );

-- ---
-- Table 'questions'
--
DROP TABLE IF EXISTS questions;
CREATE TABLE questions
             (
                          questionId          INTEGER         auto_increment   NOT NULL,
                          questionText VARCHAR(1000) NULL DEFAULT NULL,
                          lessonId VARCHAR(10000) NULL DEFAULT NULL,
                          PRIMARY KEY (questionId)
             );

-- ---
-- Table 'answers'
--
DROP TABLE IF EXISTS answers;
CREATE TABLE answers
             (
                          id INTEGER auto_increment NOT NULL,
                          answertext VARCHAR(10000) NULL DEFAULT NULL,
                          questionId INTEGER NULL DEFAULT NULL,
                          user VARCHAR(100) NULL DEFAULT NULL,
                          PRIMARY KEY (id)
             );

-- ---
-- Table 'studentLesson'
--
DROP TABLE IF EXISTS studentlesson;
CREATE TABLE studentlesson
             (
                          id          INTEGER         auto_increment   NOT NULL,
                          userid  VARCHAR(100) NULL DEFAULT NULL,
                          lessons VARCHAR(1000) NULL DEFAULT NULL,
                          PRIMARY KEY (id)
             );

-- ---
-- Foreign Keys
-- ---ALTER TABLE questions` ADD FOREIGN KEY (lessonid) REFERENCES `lessons` (`lessonid`);ALTER TABLE `answers` ADD FOREIGN KEY (questionId) REFERENCES `questions` (`questionid`);ALTER TABLE `answers` ADD FOREIGN KEY (user) REFERENCES `user` (`id`);ALTER TABLE `studentlesson` ADD FOREIGN KEY (userid) REFERENCES `user` (`id`);ALTER TABLE `studentlesson` ADD FOREIGN KEY (lessons) REFERENCES `lessons` (`lessonid`);

-- ---
-- Table Properties
-- ---
-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `lessons` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `studentLesson` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ---
-- Test Data
-- ---
-- INSERT INTO `User` (`id`,`Username`,`password`) VALUES
-- ('','','');
-- INSERT INTO `lessons` (`lessonID`,`Title`,`Summary`,`Content`) VALUES
-- ('','','','');
-- INSERT INTO `questions` (`questionID`,`QuestionText`,`lessonID`) VALUES
-- ('','','');
-- INSERT INTO `answers` (`id`,`answerText`,`questionID`,`user`) VALUES
-- ('','','','');
-- INSERT INTO `studentLesson` (`id`,`userID`,`lessons`) VALUES
-- ('','','');