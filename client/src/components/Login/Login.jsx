// import axios from "axios";
// import { useState } from "react";
// import { useCookies } from "react-cookie";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { AuthToken } from "../../helpers/AuthToken";
// import Modal from "./../common/Modal";

// const Login = () => {
//   const [active, setActive] = useState(false);
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const navigate = useNavigate();
//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const sendForm = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:3001/login",
//         formData
//       );
//       AuthToken(data.token);
//       localStorage.setItem("token", data.token);
//       toast.success("ورود موفق بود.");
//       navigate("/");
//     } catch (error) {
//       setActive(true);
//     }
//   };

//   return (
//     <section className="lg:w-[30%] mt-10 md:w-[70%] w-[90%]  mx-auto container shadow-xl rounded-xl p-4 ">
//       <form className="my-2" onSubmit={sendForm}>
//         <h3 className="mb-2 text-2xl text-blue-800 font-semibold text-center">
//           خوش اومدی
//         </h3>
//         <div className="my-4">
//           <label htmlFor={"username"} className="block mb-1 text-lg">
//             نام کاربری
//           </label>
//           <input
//             type="text"
//             id={"username"}
//             name="username"
//             value={formData.username}
//             onChange={onChange}
//             className="w-full py-3 px-4 text-center rounded-xl bg-gray-500 text-secondary-900 border border-gray-100 outline-none duration-200 transition-all ease-in-out hover:border-primary-300 focus:outline-none focus:border-primary-300 focus:shadow-input-focus focus:bg-white"
//           />
//         </div>
//         <div className="my-4">
//           <label htmlFor={"password"} className="block mb-1 text-lg ">
//             رمز عبور
//           </label>
//           <input
//             type="password"
//             value={formData.password}
//             onChange={onChange}
//             id={"password"}
//             name="password"
//             className="w-full text-black text-center py-3 px-4 rounded-xl bg-gray-500 text-secondary-900 border border-gray-100 outline-none duration-200 transition-all ease-in-out hover:border-primary-300 focus:outline-none focus:border-primary-300 focus:shadow-input-focus focus:bg-white"
//           />
//         </div>
//         <button className="my-3 w-full px-4 py-3 bg-blue-900 text-white hover:bg-blue-800 shadow-md rounded-xl duration-200 transition-all">
//           ورود به حساب
//         </button>
//         {active && <Modal setActive={setActive} />}
//       </form>
//     </section>
//   );
// };

// export default Login;

import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login
