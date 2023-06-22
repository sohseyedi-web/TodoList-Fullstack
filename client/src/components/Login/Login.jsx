import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../helpers/authService";

const Login = () => {
  const [cookies] = useCookies(["jwt"]);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { data, isLoading, mutateAsync } = useMutation({ mutationFn: login });

  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      await mutateAsync(formData);
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="lg:w-[30%] mt-10 md:w-[70%] w-[90%]  mx-auto container shadow-xl rounded-xl p-4  border-2 border-blue-800">
      <form className="my-2" onSubmit={sendForm}>
        <h3 className="mb-2 text-2xl text-gray-300 font-semibold text-center">
          خوش اومدی
        </h3>
        <div className="my-4">
          <label htmlFor={"email"} className="block mb-1 text-lg text-white">
            ایمیل
          </label>
          <input
            required
            type="email"
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
            required
            type="password"
            value={formData.password}
            onChange={onChange}
            id={"password"}
            name="password"
            className="w-full text-black text-center py-3 px-4 rounded-xl bg-gray-300 text-secondary-900 border border-gray-50 outline-none duration-200 transition-all ease-in-out hover:border-primary-300 focus:outline-none focus:border-primary-300 focus:shadow-input-focus focus:bg-white"
          />
        </div>
        <button className="my-3 w-full px-4 py-3 bg-blue-900 text-white hover:bg-blue-800 shadow-md rounded-xl duration-200 transition-all">
          {isLoading ? "صبر کنید ... " : "ورود به حساب"}
        </button>
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 text-white">
          <div>فراموشی رمز عبور!</div>
          <p>
            {" "}
            حساب کاربری نداری؟{" "}
            <Link className="text-blue-500 hover:underline" to={"/register"}>
              {" "}
              ثبت نام
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
