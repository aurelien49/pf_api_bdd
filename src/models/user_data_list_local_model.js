const mongoose = require('mongoose');
const DataListLocalModel = require('./data_list_local_model');

const userDataListSchema = mongoose.Schema({
    //idUser: { type: Schema.Types.ObjectId, auto: true },
    userRecords: { type: [DataListLocalModel.schema], required: true },
});

module.exports = mongoose.model('UserDataListLocalModel', userDataListSchema);
