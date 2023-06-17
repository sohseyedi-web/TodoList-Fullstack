import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/"

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
