import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3500",
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
