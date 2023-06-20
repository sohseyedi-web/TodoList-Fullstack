import axios from "axios";

export const getTodos = async () => {
  const { data } = await axios.get("http://localhost:4000/tasks/all");
  return data;
};
export const saveTodos = async (data) => {
  const { data } = await axios.post(
    "http://localhost:4000/tasks",
    { ...data },
    { withCredentials: true }
  );
  return data;
};
export const updateTodos = async (id, data) => {
  const { data } = await axios.put(
    `http://localhost:4000/tasks/update/${id}`,
    { ...data },
    { withCredentials: true }
  );
  return data;
};
export const deleteTodos = async (id) => {
  const { data } = await axios.delete(`http://localhost:4000/tasks/${id}`, {
    withCredentials: true,
  });
  return data;
};
