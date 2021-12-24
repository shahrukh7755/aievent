import mongoose from 'mongoose'

const registrationSchema = mongoose.Schema({


    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },





}, {
    timestamps: true
})

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;