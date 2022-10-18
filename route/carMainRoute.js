const controller = require('../controllers/CarTable');
var express = require('express');
var router = express.Router(); 

router.get('/', controller.getItemALL);
router.get('/brand/:value', controller.getItemByBrand);
router.get('/desc/:value', controller.getItemByDesc);
router.get('/:id', controller.getItemByID);
router.get('/', controller.postItem); 
router.get('/', controller.deleteItem);
router.get('/', controller.updateItem);

module.exports = router;
