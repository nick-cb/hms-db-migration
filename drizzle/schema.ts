import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar, date, bigint, double } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const admin = mysqlTable("admin", {
	id: int("id").autoincrement().notNull(),
	email: varchar("email", { length: 100 }).notNull(),
	username: varchar("username", { length: 100 }).notNull(),
	password: varchar("password", { length: 50 }).notNull(),
	fullName: varchar("full_name", { length: 50 }),
	image: varchar("image", { length: 500 }),
	gender: varchar("gender", { length: 50 }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	createdAt: date("created_at", { mode: 'string' }).notNull(),
},
(table) => {
	return {
		adminIdPk: primaryKey({ columns: [table.id], name: "admin_id_pk"}),
	}
});

export const appointment = mysqlTable("appointment", {
	id: int("id").autoincrement().notNull(),
	patientId: bigint("patient_id", { mode: "number" }),
	name: varchar("name", { length: 100 }).notNull(),
	description: varchar("description", { length: 200 }).notNull(),
	diagnosis: varchar("diagnosis", { length: 200 }),
	treatment: varchar("treatment", { length: 200 }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	createdAt: date("created_at", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	modifiedAt: date("modified_at", { mode: 'string' }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	deletedAt: date("deleted_at", { mode: 'string' }),
	status: varchar("status", { length: 50 }).notNull(),
	doctorId: varchar("doctor_id", { length: 50 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	scheduledAt: date("scheduled_at", { mode: 'string' }).notNull(),
},
(table) => {
	return {
		appointmentIdPk: primaryKey({ columns: [table.id], name: "appointment_id_pk"}),
	}
});

export const doctor = mysqlTable("doctor", {
	id: int("id").autoincrement().notNull(),
	doctorId: varchar("doctor_id", { length: 50 }).notNull(),
	password: varchar("password", { length: 100 }).notNull(),
	fullName: varchar("full_name", { length: 100 }).notNull(),
	email: varchar("email", { length: 100 }).notNull(),
	gender: varchar("gender", { length: 100 }),
	moblieNumber: bigint("moblie_number", { mode: "number" }),
	specialized: varchar("specialized", { length: 100 }),
	address: varchar("address", { length: 200 }),
	image: varchar("image", { length: 500 }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date("date", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	modifyDate: date("modify_date", { mode: 'string' }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	deleteDate: date("delete_date", { mode: 'string' }),
	status: varchar("status", { length: 50 }).notNull(),
},
(table) => {
	return {
		doctorIdPk: primaryKey({ columns: [table.id], name: "doctor_id_pk"}),
	}
});

export const patient = mysqlTable("patient", {
	id: int("id").autoincrement().notNull(),
	patientId: bigint("patient_id", { mode: "number" }).notNull(),
	password: varchar("password", { length: 100 }).notNull(),
	fullName: varchar("full_name", { length: 100 }),
	moblieNumber: bigint("moblie_number", { mode: "number" }),
	gender: varchar("gender", { length: 50 }),
	address: varchar("address", { length: 200 }),
	image: varchar("image", { length: 500 }),
	description: varchar("description", { length: 200 }),
	diagnosis: varchar("diagnosis", { length: 200 }),
	treatment: varchar("treatment", { length: 200 }),
	doctor: varchar("doctor", { length: 100 }),
	specialized: varchar("specialized", { length: 100 }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date("date", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateModify: date("date_modify", { mode: 'string' }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateDelete: date("date_delete", { mode: 'string' }),
	status: varchar("status", { length: 100 }).notNull(),
	statusPay: varchar("status_pay", { length: 255 }),
},
(table) => {
	return {
		patientIdPk: primaryKey({ columns: [table.id], name: "patient_id_pk"}),
	}
});

export const payment = mysqlTable("payment", {
	id: int("id").autoincrement().notNull(),
	patientId: int("patient_id"),
	doctor: varchar("doctor", { length: 250 }),
	totalDays: int("total_days"),
	totalPrice: double("total_price"),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	date: date("date", { mode: 'string' }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dateCheckout: date("date_checkout", { mode: 'string' }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	datePay: date("date_pay", { mode: 'string' }),
},
(table) => {
	return {
		paymentIdPk: primaryKey({ columns: [table.id], name: "payment_id_pk"}),
	}
});
