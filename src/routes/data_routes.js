const express = require('express');
const router = express.Router();
const controller = require('../controllers/data_controller');
const auth = require("../middlewares/auth");

/* -------------------------------------------------------------------------- */
/* Crud on UserDataListLocalModel                                             */
/* -------------------------------------------------------------------------- */
router.get('/user_record/:id', controller.getUserRecord);
router.get('/user_records', controller.getUserRecords);
router.delete('/user_record/:id', controller.deleteUserRecord);

/* -------------------------------------------------------------------------- */
/* Crud on DataListLocalModel                                             */
/* -------------------------------------------------------------------------- */
/*router.get('/data/record/:id', controller.getRecord);
router.get('/data/records', controller.getRecords);
router.post('/data/record', controller.createRecord);
router.put('/data/record/:id', controller.updateRecord);
router.delete('/data/record/:id', controller.deleteRecord);
*/

module.exports = router;