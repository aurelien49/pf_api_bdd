const express = require('express');
const router = express.Router();
const controller = require('../controllers/data_controller');
const auth = require("../middlewares/auth");

/* ------------------------------------------------------------------------------- */
/* ------------------------------------- GET ------------------------------------- */
/* ------------------------------------------------------------------------------- */

router.get('/user-record/:iduser/record/:recordId', controller.getUserRecord);
router.get('/user-records/:iduser', controller.getUserRecords);

/* ------------------------------------------------------------------------------- */
/* ------------------------------------- POST ------------------------------------ */
/* ------------------------------------------------------------------------------- */

router.post('/new/user', controller.newEmptyUserRecord);

/* ------------------------------------------------------------------------------- */
/* ------------------------------------- PUT ------------------------------------- */
/* ------------------------------------------------------------------------------- */

router.put('/upsert-user-record/', controller.upsertUserRecord);
router.put('/user/', controller.updateUser);

/* ------------------------------------------------------------------------------- */
/* ------------------------------------ DELETE ----------------------------------- */
/* ------------------------------------------------------------------------------- */

router.delete('/user/:iduser', controller.deleteUser);
router.delete('/user-record/:iduser/record/:recordId', controller.deleteUserRecord);
router.delete('/user-record/:iduser/records', controller.deleteUserRecords);

module.exports = router;