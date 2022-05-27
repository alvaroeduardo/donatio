-- MySQL Script generated by MySQL Workbench
-- Fri May 27 10:49:44 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema donatio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema donatio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `donatio` DEFAULT CHARACTER SET utf8 ;
USE `donatio` ;

-- -----------------------------------------------------
-- Table `donatio`.`posicao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donatio`.`posicao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `donatio`.`tipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donatio`.`tipo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `donatio`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donatio`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `tipo_id` INT NOT NULL,
  PRIMARY KEY (`id`, `tipo_id`),
  INDEX `fk_produtos_tipo1_idx` (`tipo_id` ASC) VISIBLE,
  CONSTRAINT `fk_produtos_tipo1`
    FOREIGN KEY (`tipo_id`)
    REFERENCES `donatio`.`tipo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `donatio`.`doacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donatio`.`doacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `end_retirada` VARCHAR(45) NOT NULL,
  `produtos_id` INT NOT NULL,
  PRIMARY KEY (`id`, `produtos_id`),
  INDEX `fk_doacao_produtos1_idx` (`produtos_id` ASC) VISIBLE,
  CONSTRAINT `fk_doacao_produtos1`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `donatio`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `donatio`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donatio`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `cpf` INT NOT NULL,
  `end` VARCHAR(255) NOT NULL,
  `posicao_id` INT NOT NULL,
  `doacao_id` INT NOT NULL,
  PRIMARY KEY (`id`, `posicao_id`, `doacao_id`),
  INDEX `fk_usuario_posicao_idx` (`posicao_id` ASC) VISIBLE,
  INDEX `fk_usuario_doacao1_idx` (`doacao_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_posicao`
    FOREIGN KEY (`posicao_id`)
    REFERENCES `donatio`.`posicao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_doacao1`
    FOREIGN KEY (`doacao_id`)
    REFERENCES `donatio`.`doacao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `donatio` ;

-- -----------------------------------------------------
-- Placeholder table for view `donatio`.`view1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donatio`.`view1` (`id` INT);

-- -----------------------------------------------------
-- View `donatio`.`view1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `donatio`.`view1`;
USE `donatio`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
