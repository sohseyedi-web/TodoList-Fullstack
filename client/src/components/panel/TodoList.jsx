import * as RiIcon from "react-icons/ri";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  completedTodos,
  deleteTodos,
  getTodos,
} from "./../../helpers/todoService";
import { toast } from "react-hot-toast";

const TodoList = ({ updateTodo }) => {
  const { data, isLoading } = useQuery(["get-todos"], getTodos, {
    refetchInterval: 100,
  });
  const { todos } = data || {};
  const { mutateAsync } = useMutation({ mutationFn: deleteTodos });
  const { mutateAsync: completed } = useMutation({
    mutationFn: completedTodos,
  });

  const deleteHandler = async (id) => {
    try {
      await mutateAsync(id);
      toast.success("یادداشت حذف شد");
    } catch (error) {
      toast.error("خطا ");
    }
  };

  const completedHandler = async (id) => {
    try {
      await completed(id);
      toast.success("یادداشت تکمیل شد");
    } catch (error) {
      toast.error("خطا ");
    }
  };

  if (isLoading)
    return (
      <div className="text-white text-center text-lg font-semibold mt-10">
        چند لحظه صبر کنید...
      </div>
    );

  return todos?.length === 0 ? (
    <div className="text-white text-center text-lg font-semibold mt-10">
      یادداشتی وجود ندارد
    </div>
  ) : (
    todos?.map((todo) => (
      <div
        key={todo._id}
        className="cursor-pointer transition-all duration-300 hover:bg-[#202020] w-[90%] text-white shadow-md py-3 lg:w-[50%] md:w-[75%] mx-auto relative mt-10 bg-[#252525] rounded-xl px-3 flex items-center justify-between"
      >
        <h3
          className={`${
            todo.onCompleted && "line-through"
          } text-xl font-semibold m-0`}
        >
          {todo.title}
        </h3>
        <div className="flex items-center gap-x-4">
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => updateTodo(todo._id, todo.title)}
          >
            <RiIcon.RiEdit2Line size={27} />
          </span>
          <span
            className="text-yellow-500 cursor-pointer"
            onClick={() => completedHandler(todo._id)}
          >
            <RiIcon.RiCheckLine size={27} />
          </span>
          <span
            className="text-red-500 cursor-pointer"
            onClick={() => deleteHandler(todo._id)}
          >
            <RiIcon.RiDeleteBin5Fill size={27} />
          </span>
        </div>
      </div>
    ))
  );
};

export default TodoList;
