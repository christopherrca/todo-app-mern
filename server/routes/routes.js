// import express from "express"
// const router = express.Router()



// const { getAllData } = require('../controllers/crudController.js')

// router.route('/').get(getAllData)

import express from "express"
const router = express.Router()


import {getAllData, createData,getOneItem, updateData, deleteData } from "../controllers/crudController.js"


router.route("/").get(getAllData).post(createData)
router.route("/:itemID").get(getOneItem).patch(updateData).delete(deleteData)

export default router
