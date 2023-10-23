import axios from "../config/endpoint";

const findall = () => {
  return axios.get("/items");
};

const create = (data) => {
  return axios.post("/items", data);
};

const deleteItems = async (id) => {
  await axios.delete(`/items/delete/${id}`);
};

const updateItems = async (id, data) => {
  await axios.put(`/items/update/${id}`, data);
};

const getDetails = async (id) => {
  await axios.get(`/items/details/${id}`);
};

export default {
  findall,
  create,
  deleteItems,
  updateItems,
  getDetails,
};
