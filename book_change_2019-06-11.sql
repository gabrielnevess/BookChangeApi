CREATE DATABASE book_change;
USE book_change;

CREATE TABLE usuario (
  in_usuario_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  va_nome VARCHAR(250) NOT NULL,
  dt_data_nascimento date DEFAULT NULL,
  va_celular VARCHAR(15) NOT NULL,
  va_telefone VARCHAR(15) DEFAULT NULL,
  va_email VARCHAR(250) NOT NULL UNIQUE,
  va_password VARCHAR(250) NOT NULL,
  en_genero enum('masculino','feminino','nao-informado'),
  va_cpf VARCHAR(14) DEFAULT NULL,
  CONSTRAINT usuario_pkey PRIMARY KEY(in_usuario_id),
  CONSTRAINT chk_en_genero CHECK (en_genero = 'masculino' or en_genero = 'feminino' or en_genero = 'nao-informado')
);

CREATE TABLE usuario_imagem (
  in_usuario_imagem_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  in_usuario_id INTEGER UNSIGNED NOT NULL UNIQUE,
  te_path TEXT NOT NULL,
  CONSTRAINT usuario_imagem_pkey PRIMARY KEY(in_usuario_imagem_id),
  CONSTRAINT usuario_imagem_in_usuario_fkey FOREIGN KEY (in_usuario_id) REFERENCES usuario (in_usuario_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE endereco (
  in_endereco_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  in_usuario_id INTEGER UNSIGNED NOT NULL UNIQUE,
  logradouro VARCHAR(250) NOT NULL,
  bairro VARCHAR(250) NOT NULL,
  cidade VARCHAR(250) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  numero int(11) NOT NULL,
  complemento VARCHAR(50) DEFAULT NULL,
  ponto_referencia VARCHAR(250) DEFAULT NULL,
  CONSTRAINT endereco_pkey PRIMARY KEY(in_endereco_id),
  CONSTRAINT endereco_in_usuario_fkey FOREIGN KEY (in_usuario_id) REFERENCES usuario (in_usuario_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE anuncio (
  in_anuncio_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  in_usuario_id INTEGER UNSIGNED NOT NULL,
  va_titulo_livro VARCHAR(250) NOT NULL,
  va_autor_livro VARCHAR(50) NOT NULL,
  va_ano_livro VARCHAR(4) DEFAULT NULL,
  en_estado enum('novo', 'usado') NOT NULL,
  en_tipo_anuncio enum('venda', 'troca') NOT NULL,
  en_status_anuncio enum('ativo', 'desativado') NOT NULL,
  en_status_endereco_visivel enum('ativo', 'desativado') NOT NULL,
  te_descricao TEXT NOT NULL,
  dt_data_criacao DATETIME NOT NULL,
  CONSTRAINT anuncio_pkey PRIMARY KEY(in_anuncio_id),
  CONSTRAINT chk_en_estado CHECK (en_estado = 'novo' or en_estado = 'usado'),
  CONSTRAINT chk_en_tipo_anuncio CHECK (en_tipo_anuncio = 'venda' or en_tipo_anuncio = 'troca'),
  CONSTRAINT chk_en_status_anuncio CHECK (en_status_anuncio = 'ativo' or en_status_anuncio = 'desativado'),
  CONSTRAINT chk_en_status_endereco_visivel CHECK (en_status_endereco_visivel = 'ativo' or en_status_endereco_visivel = 'desativado'),
  CONSTRAINT anuncio_in_usuario_fkey FOREIGN KEY (in_usuario_id) REFERENCES usuario (in_usuario_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE anuncio_imagem (
  in_anuncio_imagem_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  in_anuncio_id INTEGER UNSIGNED NOT NULL,
  te_path TEXT NOT NULL,
  CONSTRAINT anuncio_imagem_pkey PRIMARY KEY(in_anuncio_imagem_id),
  CONSTRAINT anuncio_imagem_in_anuncio_fkey FOREIGN KEY (in_anuncio_id) REFERENCES anuncio (in_anuncio_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE genero (
  in_genero_id INTEGER UNSIGNED NOT NULL,
  va_genero VARCHAR(50) NOT NULL,
  CONSTRAINT genero_pkey PRIMARY KEY(in_genero_id)
);

CREATE TABLE genero_anuncio (
  in_genero_anuncio_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  in_anuncio_id INTEGER UNSIGNED NOT NULL,
  in_genero_id INTEGER UNSIGNED NOT NULL,
  CONSTRAINT genero_anuncio_pkey PRIMARY KEY (in_genero_anuncio_id),
  CONSTRAINT genero_anuncio_in_anuncio_fkey FOREIGN KEY (in_anuncio_id) REFERENCES anuncio (in_anuncio_id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT genero_anuncio_in_genero_fkey FOREIGN KEY (in_genero_id) REFERENCES genero (in_genero_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* procedures */
DELIMITER $$
	CREATE PROCEDURE `insere_usuario`(
        in_usuario_id INT,
		    va_nome VARCHAR(250), 
		    dt_data_nascimento DATE, 
		    va_celular VARCHAR(15), 
		    va_telefone VARCHAR(15), 
		    va_email VARCHAR(250), 
		    va_password VARCHAR(250),
		    en_genero ENUM('masculino','feminino','nao-informado'), 
		    va_cpf VARCHAR(14)
	  )
		BEGIN
			INSERT INTO usuario VALUES (in_usuario_id, va_nome, dt_data_nascimento, va_celular, va_telefone, va_email, va_password, en_genero, va_cpf);
		END $$
DELIMITER ;

DELIMITER $$
	CREATE PROCEDURE `delete_usuario` (id INT)
		BEGIN
			DELETE FROM usuario
            WHERE in_usuario_id = id;
        END $$
DELIMITER ; 

/* genero */
INSERT INTO genero VALUES (1,'romance'), (2,'drama'), (3,'comédia'), (4,'terror'), (5,'poesia'), (6,'fantasia'), (7,'ficção-cientifíca'), (8,'distopia'), (9,'infanto-juvenil'), (10,'outros');

/* usuario */
INSERT INTO usuario VALUES (1,'Gabriel Neves','1994-09-10','81973066251','','gabriel-silva_2011@hotmail.com','$2a$10$wmC7bsWoTPu2FfEUbgtb2.Wxeucxadt23Dh/j2qFfcH.iFOvhSOBK','masculino', '');
INSERT INTO usuario VALUES (2,'Felipe Silva','1993-10-09','611054432622','','felipesilva@hotmail.com','$2a$10$wmC7bsWoTPu2FfEUbgtb2.Wxeucxadt23Dh/j2qFfcH.iFOvhSOBK','masculino', '');
INSERT INTO usuario VALUES (3,'Carlos Alberto','1984-09-11','80306581766','','carlosalberto@hotmail.com','$2a$10$wmC7bsWoTPu2FfEUbgtb2.Wxeucxadt23Dh/j2qFfcH.iFOvhSOBK','masculino', '');
INSERT INTO usuario VALUES (4,'Rafael Nascimento','1992-11-10','711150554810','','rafaelnascimento@hotmail.com','$2a$10$wmC7bsWoTPu2FfEUbgtb2.Wxeucxadt23Dh/j2qFfcH.iFOvhSOBK','masculino', '');
INSERT INTO usuario VALUES (5,'Rafaela Costa','1992-11-10','27177940374714','','rafaelacosta@hotmail.com','$2a$10$wmC7bsWoTPu2FfEUbgtb2.Wxeucxadt23Dh/j2qFfcH.iFOvhSOBK','feminino', '');

/* endereco */
INSERT INTO endereco VALUES(1,1,'Travesssa Santa Rosa','Centro','Igarassu','PE',94,'C','');
INSERT INTO endereco VALUES(2,2,'Avenida costa souza','Centro','Recife','PE',99,'D','');
INSERT INTO endereco VALUES(3,3,'Rua Rosa e Silva','Centro','Abreu e Lima','PE',8084,'APTO 15','');
INSERT INTO endereco VALUES(4,4,'Avenida Paulista','Centro','São Paulo','PE',1010,'E','');
INSERT INTO endereco VALUES(5,5,'Rua costa azul','Centro','Rio de Janeiro','PE',1004,'EE','');

/* anuncio */
INSERT INTO anuncio VALUES (1,1, 'A culpa é das Estrelas','John Green',2014,'novo','troca','ativo','desativado','Hazel Grace Lancaster e Augustus Waters são dois adolescentes que se conhecem em um grupo de apoio para pacientes com câncer. Por causa da doença, Hazel sempre descartou a ideia de se envolver amorosamente, mas acaba cedendo ao se apaixonar por Augustus.','2019-05-08 01:40:00');
INSERT INTO anuncio VALUES (2,2, 'A Cabana','William P. Young',2017,'novo','venda','ativo','ativo','Um homem vive atormentado após perder a sua filha mais nova, cujo corpo nunca foi encontrado, mas sinais de que ela teria sido violentada e assassinada são encontrados em uma cabana nas montanhas.','2019-05-08 01:40:00');

/* genero_anuncio */
INSERT INTO genero_anuncio VALUES(1,1,2), (2,1,3);
INSERT INTO genero_anuncio VALUES(3,2,2), (4,2,6);

/* select */
select 
	usuario.va_nome,
	usuario.in_usuario_id,
	anuncio.va_titulo_livro,
	anuncio.va_autor_livro,
	anuncio.va_ano_livro,
	anuncio.en_estado,
	anuncio.te_descricao,
	genero.va_genero,
	anuncio.dt_data_criacao
from usuario 
	inner join anuncio on anuncio.in_usuario_id = usuario.in_usuario_id 
	inner join genero_anuncio on genero_anuncio.in_anuncio_id = anuncio.in_anuncio_id
	inner join genero on genero.in_genero_id = genero_anuncio.in_genero_id
/*where usuario.in_usuario_id = 1*/