import axios from "axios";

export const register = async (data) => {
  await axios
    .post(
      "http://localhost:4000/auth/register",
      { ...data },
      { withCredentials: true }
    )
    .then((res) => res.data);
};
export const login = async (data) => {
  await axios
    .post(
      "http://localhost:4000/auth/login",
      { ...data },
      { withCredentials: true }
    )
    .then((res) => res.data);
};
export const logout = async () => {
  await axios
    .get("http://localhost:4000/auth/logout", { withCredentials: true })
    .then((res) => res.data);
};

export const getUser = () => {
  return axios
    .get("http://localhost:4000/auth", { withCredentials: true })
    .then((res) => res.data);
};
