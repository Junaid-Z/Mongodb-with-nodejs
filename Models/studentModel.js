import dbConnection from "../dbConnection.js";
import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
	name: {
		type: String,
		requred: true
	},
	age: {
		type: Number,
		requred: true
	},
	grade: {
		type: String,
		requred: true
	},
	isOccupied: {
		type: Boolean,
		requred: true
	}
})
const studentModel = dbConnection.model('students', studentSchema)
export default studentModel;
