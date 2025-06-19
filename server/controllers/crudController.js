import Task from "../models/User.js"




export const getAllData = async (req, res) => {
  try {
      const data = await Task.find({})
      res.status(200).json({data})
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}



export const createData = async (req, res) => {
  try {
    // res.status(200).json({ message: "We are creating data" })
    const data = await Task.create(req.body)
    res.status(201).json({data})
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}



export const getOneItem = async (req, res) => {
  try {
    const {itemID} = req.params;
    const data = await Task.find({_id:itemID})
    if(!data) {
      res.status(404).json({message: "oh this item does not exist"})
    }
    res.status(200).json({data})
  } catch (error) {
    res.status(500).json({ message: error })
  }
}


export const updateData = async (req, res) => {
  try {
    const {itemID} = req.params;
    const data = await Task.findByIdAndUpdate({_id:itemID}, req.body, {
      new: true,
      runValidators: true
    })
    if(!data) {
      res.status(404).json({message: "oh this item does not exist"})
    }
    res.status(200).json({data})
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}



export const deleteData = async (req, res) => {
  try {
    const {itemID} = req.params;
    const data = await Task.findByIdAndDelete({_id:itemID})
    if(!data) {
      res.status(404).json({message: "oh this item does not exist"})
    }
    res.status(200).json({data})
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}




export default {getAllData, createData,getOneItem, updateData, deleteData }