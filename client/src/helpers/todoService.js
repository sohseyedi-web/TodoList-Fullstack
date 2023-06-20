import axios from "axios";

export const getTodos = async () => {
  const { data } = await axios.get("http://localhost:4000/tasks/all");
  return data;
};
