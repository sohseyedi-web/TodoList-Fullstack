import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout, getUser } from "./../../helpers/authService";
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

  const logOutHandler = async () => {
    await logout();
    removeCookie("jwt");
    navigate("/login");
  };

  return <div>Panel</div>;
};

export default Panel;
