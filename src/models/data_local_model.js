const mongoose = require('mongoose');

const dataLocalSchema = mongoose.Schema({
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    day: { type: Number, required: true },
    hour: { type: Number, required: true },
    minute: { type: Number, required: true },
    second: { type: Number, required: true },
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
    roll: { type: Number, required: true },
    pitch: { type: Number, required: true },
    yaw: { type: Number, required: true },
});

module.exports = mongoose.model('DataLocalModel', dataLocalSchema);