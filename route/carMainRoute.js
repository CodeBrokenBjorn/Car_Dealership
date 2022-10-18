const controller = require('../controllers/CarTable');
var express = require('express');
var router = express.Router(); 

router.get('/', controller.getItemALL);
router.get('/brand/:value', controller.getItemByBrand);
router.get('/desc/:value', controller.getItemByDesc);
router.get('/:id', controller.getItemByID);

router.post('/', controller.postItem); 
router.delete('/', controller.deleteItem);
router.put('/', controller.updateItem);

module.exports = router;
