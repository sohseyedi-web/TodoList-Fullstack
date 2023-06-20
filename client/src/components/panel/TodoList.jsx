import * as RiIcon from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "./../../helpers/todoService";

const TodoList = () => {
  const { data, isLoading } = useQuery(["get-todos"], getTodos, {
    refetchInterval: 100,
  });

  if (isLoading)
    return (
      <div className="text-white text-center text-lg font-semibold mt-10">
        چند لحظه صبر کنید...
      </div>
    );

  return data?.todos?.map((todo) => (
    <div
      key={todo._id}
      className="cursor-pointer transition-all duration-300 hover:bg-[#202020] w-[90%] text-white shadow-md py-3 lg:w-[50%] md:w-[75%] mx-auto relative mt-10 bg-[#252525] rounded-xl px-3 flex items-center justify-between"
    >
      <h3 className="text-xl font-semibold m-0">{todo.title}</h3>
      <div className="flex items-center gap-x-4">
        <span className="text-green-500 cursor-pointer">
          <RiIcon.RiEdit2Line size={27} />
        </span>
        <span className="text-red-500 cursor-pointer">
          <RiIcon.RiDeleteBin5Fill size={27} />
        </span>
      </div>
    </div>
  ));
};

export default TodoList;
