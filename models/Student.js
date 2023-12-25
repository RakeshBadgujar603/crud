import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 2,
    max: 60
  },
  fees: {
    type: Number,
    required: true
  },
});

// module.exports = mongoose.model('student',StudentSchema)
const StudentModel = mongoose.model("student1", StudentSchema);

export default StudentModel;
