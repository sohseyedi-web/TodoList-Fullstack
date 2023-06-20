import { useEffect } from "react";
import { useCookies } from "react-cookie";
import * as RiIcon from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout, getUser } from "./../../helpers/authService";
import Header from "./TopSide";
const Panel = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["jwt"]);
  const { data, isLoading } = useQuery({
    queryFn: getUser,
    queryKey: "get-user",
  });

  useEffect(() => {
    if (!cookies.jwt) {
      navigate("/login");
    }
  }, [cookies, navigate]);

  console.log(data);

  const logOutHandler = async () => {
    await logout();
    removeCookie("jwt");
    navigate("/login");
  };

  return (
    <>
      <Header data={data} logOut={logOutHandler} />
      <section className="max-w-7xl mx-auto container">
        <div className="w-[90%] lg:w-[50%] md:w-[75%] mx-auto relative mt-10">
          <input
            type="text"
            className="w-full outline-none h-[48px] rounded-xl px-2 border-none shadow-lg focus:bg-white transition-all duration-300 bg-gray-500"
          />
          <button className="w-[100px] absolute -left-1 border-none rounded-r-none top-0 h-[48px] bg-indigo-700 text-white rounded-xl">
            ارسال
          </button>
        </div>
        <div className="cursor-pointer transition-all duration-300 hover:bg-[#202020] w-[90%] text-white shadow-md py-3 lg:w-[50%] md:w-[75%] mx-auto relative mt-10 bg-[#252525] rounded-xl px-3 flex items-center justify-between">
          <h3 className="text-xl font-semibold">سهیل سیدی</h3>
          <div className="flex items-center gap-x-4">
            <span className="text-green-500 cursor-pointer">
              <RiIcon.RiEdit2Line size={27} />
            </span>
            <span className="text-red-500 cursor-pointer">
              <RiIcon.RiDeleteBin5Fill size={27} />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Panel;
