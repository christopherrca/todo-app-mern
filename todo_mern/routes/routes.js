const express = require('express')
const router = express.Router();

//Destructuring
const {getAllData, createData, getOneItem, updateData, deleteData} = require('../controllers/CrudController')

//Routing
router.route('/').get(getAllData).post(createData)
router.route('/:itemID').get(getOneItem).patch(updateData).delete(deleteData)

module.exports = router;