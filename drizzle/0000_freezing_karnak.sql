-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `admin` (
	`admin_id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(100) NOT NULL,
	`username` varchar(100) NOT NULL,
	`password` varchar(50) NOT NULL,
	`full_name` varchar(50),
	`image` varchar(500),
	`gender` varchar(50),
	`date` date NOT NULL,
	CONSTRAINT `admin_admin_id_pk` PRIMARY KEY(`admin_id`)
);
--> statement-breakpoint
CREATE TABLE `appointment` (
	`id` int AUTO_INCREMENT NOT NULL,
	`appointment_id` int NOT NULL,
	`patient_id` bigint,
	`name` varchar(100) NOT NULL,
	`gender` varchar(50) NOT NULL,
	`description` varchar(200) NOT NULL,
	`diagnosis` varchar(200),
	`treatment` varchar(200),
	`moblie_number` bigint NOT NULL,
	`address` varchar(500) NOT NULL,
	`date` date NOT NULL,
	`date_modify` date,
	`date_delete` date,
	`status` varchar(50) NOT NULL,
	`doctor` varchar(50) NOT NULL,
	`specialized` varchar(100),
	`schedule` date NOT NULL,
	CONSTRAINT `appointment_id_pk` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `doctor` (
	`id` int AUTO_INCREMENT NOT NULL,
	`doctor_id` varchar(50) NOT NULL,
	`password` varchar(100) NOT NULL,
	`full_name` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`gender` varchar(100),
	`moblie_number` bigint,
	`specialized` varchar(100),
	`address` varchar(200),
	`image` varchar(500),
	`date` date NOT NULL,
	`modify_date` date,
	`delete_date` date,
	`status` varchar(50) NOT NULL,
	CONSTRAINT `doctor_id_pk` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `patient` (
	`id` int AUTO_INCREMENT NOT NULL,
	`patient_id` bigint NOT NULL,
	`password` varchar(100) NOT NULL,
	`full_name` varchar(100),
	`moblie_number` bigint,
	`gender` varchar(50),
	`address` varchar(200),
	`image` varchar(500),
	`description` varchar(200),
	`diagnosis` varchar(200),
	`treatment` varchar(200),
	`doctor` varchar(100),
	`specialized` varchar(100),
	`date` date NOT NULL,
	`date_modify` date,
	`date_delete` date,
	`status` varchar(100) NOT NULL,
	`status_pay` varchar(255),
	CONSTRAINT `patient_id_pk` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `payment` (
	`id` int AUTO_INCREMENT NOT NULL,
	`patient_id` int,
	`doctor` varchar(250),
	`total_days` int,
	`total_price` double,
	`date` date,
	`date_checkout` date,
	`date_pay` date,
	CONSTRAINT `payment_id_pk` PRIMARY KEY(`id`)
);

*/