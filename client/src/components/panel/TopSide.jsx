import { useEffect, useState } from "react";
import * as RiIcon from "react-icons/ri";

const Header = ({ data, logOut }) => {
  const [dark, setDark] = useState("light");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark("dark");
    } else {
      setDark("light");
    }
  }, []);

  useEffect(() => {
    if (dark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  const handleThemeSwitch = () => {
    setDark(dark === "dark" ? "light" : "dark");
  };

  return (
    <header className="py-3 max-w-7xl container mx-auto md:px-0 px-4">
      <div className="flex items-center justify-between  text-white">
        <h3 className="text-xl font-semibold m-0">
          سلام،{data?.user?.username}
        </h3>
        <div className="flex items-center gap-x-5">
          <button
            className="cursor-pointer transition-all duration-500 ease-in-out"
            onClick={handleThemeSwitch}
          >
            {dark === "dark" ? (
              <RiIcon.RiSunLine size={28} />
            ) : (
              <RiIcon.RiMoonLine size={28} />
            )}
          </button>

          <button>
            <RiIcon.RiNotification2Line size={28} />
          </button>
          <button
            onClick={logOut}
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
