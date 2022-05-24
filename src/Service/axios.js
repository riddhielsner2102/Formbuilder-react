import axios from "axios";

const instance = axios.create({
  headers: {
    Accept: "application/json",
  },
  baseURL: "http://localhost:61240/api/v1/FormBuilder/",
});

export default instance;
