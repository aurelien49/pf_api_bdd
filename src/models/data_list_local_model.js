const mongoose = require('mongoose');
const DataLocalModel = require('./data_local_model');

const dataListLocalSchema = mongoose.Schema({
    dateTimeS: { type: String, required: true },
    dateTime: { type: Number, required: true },
    timestamp: { type: Number, required: true },
    dataList: { type: [DataLocalModel.schema], required: true },
});

module.exports = mongoose.model('DataListLocalModel', dataListLocalSchema);
