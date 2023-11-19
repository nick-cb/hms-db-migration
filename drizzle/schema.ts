import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar, date, foreignKey, bigint, double } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const appointment = mysqlTable("appointment", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 100 }).notNull(),
	description: varchar("description", { length: 200 }),
	diagnosis: varchar("diagnosis", { length: 200 }),
	treatment: varchar("treatment", { length: 200 }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	createdAt: date("created_at", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	modifiedAt: date("modified_at", { mode: 'string' }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	deletedAt: date("deleted_at", { mode: 'string' }),
	status: varchar("status", { length: 50 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	scheduledAt: date("scheduled_at", { mode: 'string' }).notNull(),
},
(table) => {
	return {
		appointmentIdPk: primaryKey({ columns: [table.id], name: "appointment_id_pk"}),
	}
});

export const appointmentDetails = mysqlTable("appointment_details", {
	id: int("id").autoincrement().notNull(),
	appointmentId: int("appointment_id").notNull().references(() => appointment.id),
	patientId: int("patient_id").notNull().references(() => patient.id),
	doctorId: int("doctor_id").notNull().references(() => doctor.id),
},
(table) => {
	return {
		appointmentDetailsIdPk: primaryKey({ columns: [table.id], name: "appointment_details_id_pk"}),
	}
});

export const doctor = mysqlTable("doctor", {
	id: int("id").autoincrement().notNull(),
	password: varchar("password", { length: 100 }).notNull(),
	fullName: varchar("full_name", { length: 100 }).notNull(),
	email: varchar("email", { length: 100 }).notNull(),
	gender: varchar("gender", { length: 100 }),
	moblieNumber: bigint("moblie_number", { mode: "number" }),
	specialized: varchar("specialized", { length: 100 }),
	address: varchar("address", { length: 200 }),
	image: varchar("image", { length: 500 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	birthday: date("birthday", { mode: 'string' }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	modifiedAt: date("modified_at", { mode: 'string' }).default(sql`date_format(curdate(),_utf8mb4\'%Y,%m,%d\')`),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	deletedAt: date("deleted_at", { mode: 'string' }),
	status: varchar("status", { length: 50 }).notNull(),
	code: varchar("code", { length: 100 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	createdAt: date("created_at", { mode: 'string' }).default(sql`date_format(curdate(),_utf8mb4\'%Y,%m,%d\')`),
  salary: double("salary").default(sql`0`),
},
(table) => {
	return {
		doctorIdPk: primaryKey({ columns: [table.id], name: "doctor_id_pk"}),
	}
});

export const manager = mysqlTable("manager", {
	id: int("id").autoincrement().notNull(),
	email: varchar("email", { length: 100 }).notNull(),
	username: varchar("username", { length: 100 }).notNull(),
	password: varchar("password", { length: 50 }).notNull(),
	fullName: varchar("full_name", { length: 50 }),
	image: varchar("image", { length: 500 }),
	gender: varchar("gender", { length: 50 }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	birthday: date("birthday", { mode: 'string' }),
},
(table) => {
	return {
		managerIdPk: primaryKey({ columns: [table.id], name: "manager_id_pk"}),
	}
});

export const patient = mysqlTable("patient", {
	id: int("id").autoincrement().notNull(),
	password: varchar("password", { length: 100 }).notNull(),
	fullName: varchar("full_name", { length: 100 }),
	moblieNumber: bigint("moblie_number", { mode: "number" }),
	gender: varchar("gender", { length: 50 }),
	address: varchar("address", { length: 200 }),
	image: varchar("image", { length: 500 }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	birthday: date("birthday", { mode: 'string' }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	modifiedAt: date("modified_at", { mode: 'string' }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	deletedAt: date("deleted_at", { mode: 'string' }),
	status: varchar("status", { length: 100 }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	createdAt: date("created_at", { mode: 'string' }).default(sql`date_format(curdate(),_utf8mb4\'%Y,%m,%d\')`),
},
(table) => {
	return {
		patientIdPk: primaryKey({ columns: [table.id], name: "patient_id_pk"}),
	}
});

export const payment = mysqlTable("payment", {
	id: int("id").autoincrement().notNull(),
	patientId: int("patient_id").notNull().references(() => patient.id),
	totalDays: int("total_days"),
	totalPrice: double("total_price"),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	createdAt: date("created_at", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	checkoutAt: date("checkout_at", { mode: 'string' }),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	paidAt: date("paid_at", { mode: 'string' }),
	appointmentId: int("appointment_id").notNull().references(() => appointment.id),
},
(table) => {
	return {
		paymentIdPk: primaryKey({ columns: [table.id], name: "payment_id_pk"}),
	}
});
