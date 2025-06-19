// import express from "express"
// const router = express.Router()



// const { getAllData } = require('../controllers/crudController.js')

// router.route('/').get(getAllData)

import express from "express"
const router = express.Router()


import { getAllData } from "../controllers/crudController.js"


router.route("/").get(getAllData)

export default router
