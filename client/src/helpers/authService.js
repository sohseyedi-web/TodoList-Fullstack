import axios from "axios";

export const register = async (data) => {
  await axios
    .post(
      "http://localhost:4000/register",
      { ...data },
      { withCredentials: true }
    )
    .then((res) => res.data);
};
export const login = async (data) => {
  await axios
    .post("http://localhost:4000/login", { ...data }, { withCredentials: true })
    .then((res) => res.data);
};
export const logout = async () => {
  await axios
    .get("http://localhost:4000/logout", { withCredentials: true })
    .then((res) => res.data);
};

export const getUser = () => {
  return axios
    .get("http://localhost:4000", { withCredentials: true })
    .then((res) => res.data);
};
