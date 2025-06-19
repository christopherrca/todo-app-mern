import UserSchema from "../models/User.js"



export const getAllData = async (req, res) => {
  try {
    res.status(200).json({ message: "We are fetching all the data" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}



export const createData = async (req, res) => {
  try {
    res.status(200).json({ message: "We are creating data" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}



export const getOneItem = async (req, res) => {
  try {
    res.status(200).json({ message: "We are getting 1 item" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


export const updateData = async (req, res) => {
  try {
    res.status(200).json({ message: "We are updating the data" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}



export const deleteData = async (req, res) => {
  try {
    res.status(200).json({ message: "We are deleting the data" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}




export default {getAllData, createData,getOneItem, updateData, deleteData }