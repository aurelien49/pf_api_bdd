/*const dataLocalModel = require('../models/data_local_model');
const dataListLocalModel = require('../models/data_list_local_model');*/
const userDataListLocalModel = require('../models/user_data_list_local_model');
const express = require("express");
const axios = require('axios');

/* -------------------------------------------------------------------------- */
/* Crud on UserDataListLocalModel                                             */
/* -------------------------------------------------------------------------- */

exports.getUserRecord = (req, res, next) => {
    userDataListLocalModel.findById(req.params.id)
        .then((userRecord) => {
            if (!userRecord) {
                return res.status(404).json({ message: 'getUserRecord: userDataListLocalModel record not found' });
            }
            res.status(200).json(userRecord);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Server error', error: err });
        });
}

exports.getUserRecords = (req, res, next) => {
    userDataListLocalModel.find()
        .then((list) => {
            res.status(200).json(list);
        })
        .catch((err) => {
            res.status(404).json({ message: 'No record found', error: err });
        });
}

exports.deleteUserRecord = (req, res, next) => {
    userDataListLocalModel.findByIdAndDelete(req.params.id)
        .then((record) => {
            if (!record) {
                return res.status(404).json({ message: `Record with id ${req.params.id} not found` });
            }
            res.status(200).json(record);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Error deleting record', error: err });
        });
};

/* -------------------------------------------------------------------------- */
/* Crud on DataListLocalModel                                             */
/* -------------------------------------------------------------------------- */