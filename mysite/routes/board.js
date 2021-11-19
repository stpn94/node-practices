const express = require('express');
const authorized = require('./authorizedIDcheck');
const controller = require('../controllers/board');

const router = express.Router();
router.route('').get(controller.index);
router.route('/page/:page').get(controller.index);
router.route('/update/:no').get(authorized("true"), controller.update);
router.route('/update/:no').post(controller._update);
router.route('/delete/:no').get(controller._delete);
router.route('/add').get(authorized("true"),controller.add);
router.route('/add').post(authorized("true"),controller._add);
router.route('/view/:no').get(controller.view);




module.exports = router;