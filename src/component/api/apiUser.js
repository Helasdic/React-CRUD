import axios from "../config/endpoint";
import Swal from "sweetalert2";

const findall = () => {
  return axios.get("/users");
};

const create = (data) => {
  return axios.post("/users", data);
};

const loginUsers = async (data) => {
  await axios.post("/users/login", data);
};

const deleteUsers = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`/users/delete/${id}`);
        await Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUsers = (id) => {
  return axios.put(`/users/update/${id}`);
};

const getDetails = (id) => {
  return axios.get(`/users/details/${id}`);
};

export default {
  findall,
  create,
  loginUsers,
  deleteUsers,
  updateUsers,
  getDetails,
};
