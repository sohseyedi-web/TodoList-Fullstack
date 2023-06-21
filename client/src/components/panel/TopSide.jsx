import { useQuery } from "@tanstack/react-query";
import * as RiIcon from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../../helpers/authService";

const Header = ({ remove }) => {
  const navigate = useNavigate();
  const { data } = useQuery(["get-user"], getUser, { refetchInterval: 100 });

  const logOutHandler = async () => {
    await logout();
    remove("jwt");
    navigate("/login");
  };

  return (
    <header className="py-3 max-w-7xl container mx-auto md:px-0 px-4">
      <div className="flex items-center justify-between  text-white">
        <h3 className="text-xl font-semibold m-0">
          سلام،{data?.user?.username}
        </h3>
        <div className="flex items-center gap-x-5">
          {/* <button className="cursor-pointer transition-all duration-500 ease-in-out">
            {dark === "dark" ? (
              <RiIcon.RiSunLine size={28} />
            ) : (
              <RiIcon.RiMoonLine size={28} />
            )}
          </button> */}

          <button>
            <RiIcon.RiNotification2Line size={28} />
          </button>
          <button
            onClick={logOutHandler}
            className="text-white h-[35px] w-[35px] rounded-full border-none bg-red-700 flex items-center justify-center"
          >
            <RiIcon.RiShutDownLine size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
