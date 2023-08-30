const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
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

const dataListSchema = mongoose.Schema({
    dateTimeS: { type: String, required: true },
    dateTime: { type: Number, required: true },
    timestamp: { type: Number, required: true },
    dataList: [dataSchema]
});

const userDataListSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, auto: true },
    email: { type: String, default: "user email", required: false },
    password: { type: String, default: "user password", required: false },
    name: { type: String, default: "user name", required: false },
    creationDate: { type: Date, default: Date.now, required: false },
    modificationDate: { type: Date, default: Date.now, required: false },
    active: { type: Boolean, default: true, required: false },
    userRecords: [dataListSchema]
});

module.exports = mongoose.model('UserDataList', userDataListSchema);
