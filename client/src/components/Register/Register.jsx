import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      toast.success("ورود موفق بود.");
      navigate("/");
    } catch (error) {
      setActive(true);
    }
  };

  return (
    <section className="lg:w-[30%] mt-10 md:w-[70%] w-[90%]  mx-auto container shadow-xl rounded-xl p-4  border-2 border-green-600">
      <form className="my-2" onSubmit={sendForm}>
        <h3 className="mb-2 text-2xl text-gray-300 font-semibold text-center">
          ثبت نام سایت
        </h3>
        <div className="my-4">
          <label htmlFor={"username"} className="block mb-1 text-lg text-white">
            نام کاربری
          </label>
          <input
            type="text"
            id={"username"}
            name="username"
            value={formData.username}
            onChange={onChange}
            className="w-full py-3 px-4 text-center rounded-xl bg-gray-300 text-secondary-900 border border-gray-50 outline-none duration-200 transition-all ease-in-out hover:border-primary-300 focus:outline-none focus:border-primary-300 focus:shadow-input-focus focus:bg-white"
          />
        </div>
        <div className="my-4">
          <label htmlFor={"email"} className="block mb-1 text-lg text-white">
            ایمیل
          </label>
          <input
            type="text"
            id={"email"}
            name="email"
            value={formData.email}
            onChange={onChange}
            className="w-full py-3 px-4 text-center rounded-xl bg-gray-300 text-secondary-900 border border-gray-50 outline-none duration-200 transition-all ease-in-out hover:border-primary-300 focus:outline-none focus:border-primary-300 focus:shadow-input-focus focus:bg-white"
          />
        </div>
        <div className="my-4">
          <label htmlFor={"password"} className="block mb-1 text-lg text-white">
            رمز عبور
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={onChange}
            id={"password"}
            name="password"
            className="w-full text-black text-center py-3 px-4 rounded-xl bg-gray-300 text-secondary-900 border border-gray-50 outline-none duration-200 transition-all ease-in-out hover:border-primary-300 focus:outline-none focus:border-primary-300 focus:shadow-input-focus focus:bg-white"
          />
        </div>
        <button className="my-3 w-full px-4 py-3 bg-green-700 text-white hover:bg-green-600 shadow-md rounded-xl duration-200 transition-all">
          ثبت نام
        </button>
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 text-white">
          <p>
            {" "}
            حساب داری؟{" "}
            <Link className="text-green-500 hover:underline" to={"/login"}>
              {" "}
              ورود به حساب
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
