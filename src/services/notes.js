import axios from 'axios'

const baseURL = 'http://localhost:3001/notes'

const getAll = async() => {
  const response = await axios.get(baseURL)
  return response.data
}

const findOne = async(id) => {
  const response = await axios.get(`${baseURL}/${id}`)
  return response.data
}

const createNew = async(content) => {
  const object = {content, important: false}
  const res = await axios.post(baseURL, object)
  return res.data
}

const toggleImportance = async(id) => {
  const note = await findOne(id)
  if(note){
    const res = await axios.put(`${baseURL}/${id}`, {...note, important: !note.important})
    return res
  }else{
    return {error: 'note not found'}
  }
}

export default {getAll, createNew, toggleImportance}