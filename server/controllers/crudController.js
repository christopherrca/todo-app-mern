import UserSchema from "../models/User.js"



export const getAllData = async (req, res) => {
  try {
    res.status(200).json({ message: "We are fetching all the data" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}



export default {getAllData}