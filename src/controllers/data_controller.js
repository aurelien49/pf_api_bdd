const userDataList = require('../models/user_data_list_model');


/* ------------------------------------------------------------------------------- */
/* ------------------------------------- GET ------------------------------------- */
/* ------------------------------------------------------------------------------- */

exports.getUserRecord = (req, res, next) => {
    const idUser = req.params.iduser;
    const recordId = req.params.recordId;
    console.log(`getUserRecord: ---------------------- idUser: ${idUser}, recordId: ${recordId}`);

    userDataList.findOne({ idUser: idUser })
        .then((userData) => {
            if (!userData) {
                return res.status(404).json({ message: `User record with idUser ${idUser} not found` });
            }

            const specificUserRecord = userData.userRecords.find(record => record.id === recordId);

            if (!specificUserRecord) {
                return res.status(404).json({ message: `Record with id ${recordId} not found in user's records` });
            }

            res.status(200).json(specificUserRecord);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Error retrieving user record', error: err });
        });
};


exports.getUserRecords = (req, res, next) => {
    const idUser = req.params.iduser;
    console.log(`getUserRecords: ---------------------- idUser: ${idUser}`);

    userDataList.findOne({ idUser: idUser })
        .then((userData) => {
            if (!userData) {
                return res.status(404).json({ message: `User record with idUser ${idUser} not found` });
            }

            const records = userData.userRecords;

            res.status(200).json(records);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Error retrieving user record', error: err });
        });
}

/* ------------------------------------------------------------------------------- */
/* ------------------------------------- POST ------------------------------------ */
/* ------------------------------------------------------------------------------- */

exports.newEmptyUserRecord = (req, res, next) => {
    const userData = req.body;
    console.log(`POST: newEmptyUserRecord: ----------------------`);

    userDataList.create(userData)
        .then((createRecord) => {
            res.status(201).json(createRecord);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Error creating user ', error: err });
        });
}

/* ------------------------------------------------------------------------------- */
/* ------------------------------------- PUT ------------------------------------- */
/* ------------------------------------------------------------------------------- */

exports.upsertUserRecord = (req, res, next) => {
    const iduser = req.body.idUser;
    const newRecord = req.body.userRecords;
    console.log(`POST: insertUserRecord: ---------------------- idUser: ${iduser}`);

    userDataList.findOne({ idUser: iduser })
        .then((userData) => {
            if (!userData) {
                return res.status(404).json({ message: `User record with idUser ${iduser} not found` });
            }

            userData.userRecords.push(newRecord);

            userData.save()
                .then((updatedUserData) => {
                    res.status(200).json(updatedUserData);
                })
                .catch((err) => {
                    res.status(500).json({ message: 'Error saving updated user record', error: err });
                });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Error retrieving user record', error: err });
        });
}

exports.updateUser = (req, res, next) => {
    const userid = req.body.userId;
    const _body = req.body;
    console.log(`updateUser: ---------------------- idUser: ${userid}`);

    userDataList.findOne({ idUser: userid })
        .then((userData) => {
            if (!userData) {
                return res.status(404).json({ message: `User record with idUser ${userid} not found` });
            }

            userData.email = _body.email;
            userData.password = _body.password;
            userData.name = _body.name;
            userData.active = _body.active;
            userData.creationDate = _body.creationDate;
            userData.modificationDate = _body.modificationDate;

            userData.save()
                .then((updatedUserData) => {
                    res.status(200).json(updatedUserData);
                })
                .catch((err) => {
                    res.status(500).json({ message: 'Error saving updated user record', error: err });
                });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Error user updating', error: err });
        });
};

/* ------------------------------------------------------------------------------- */
/* ------------------------------------ DELETE ----------------------------------- */
/* ------------------------------------------------------------------------------- */

exports.deleteUserRecord = (req, res, next) => {
    const idUser = req.params.iduser;
    const recordId = req.params.recordId;
    console.log(`deleteUserRecord: ---------------------- idUser: ${idUser}, recordId: ${recordId}`);

    userDataList.findOne({ idUser: idUser })
        .then((userData) => {
            if (!userData) {
                return res.status(404).json({ message: `User record with idUser ${idUser} not found` });
            }

            const userRecords = userData.userRecords;

            const specificUserRecord = userRecords.find(record => record.id === recordId);

            if (!specificUserRecord) {
                return res.status(404).json({ message: `Record with id ${recordId} not found in user's records` });
            }

            specificUserRecord.remove();
            userData.save();

            res.status(200).json(specificUserRecord);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Error deleting record', error: err });
        });
};

exports.deleteUserRecords = (req, res, next) => {
    const idUser = req.params.iduser;
    console.log(`deleteUserRecords: ---------------------- idUser: ${idUser}`);

    userDataList.findOne({ idUser: idUser })
        .then((userData) => {
            if (!userData) {
                return res.status(404).json({ message: `User record with idUser ${idUser} not found` });
            }

            userData.userRecords = [];

            userData.save()
                .then((updatedUserData) => {
                    res.status(200).json(updatedUserData);
                })
                .catch((err) => {
                    res.status(500).json({ message: 'Error saving updated user record', error: err });
                });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Error retrieving user record', error: err });
        });
};

exports.deleteUser = (req, res, next) => {
    const idUser = req.params.iduser;
    console.log(`deleteUser: ---------------------- idUser: ${idUser}`);

    userDataList.findOneAndDelete({ idUser: idUser })
        .then((record) => {
            if (!record) {
                return res.status(404).json({ message: `Record with idUser ${idUser} not found` });
            }
            res.status(200).json(record);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Error deleting record', error: err });
        });
};



