import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    venue: { type: String, required: true },
    time: { type: String, required: true },
    registration: { type: Number, required: true, default: 0 },





}, {
    timestamps: true
})

const Event = mongoose.model('Event', eventSchema);

export default Event;