import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { saveTodos, updateTodos } from "../../helpers/todoService";

const TodoForm = ({ title, setTitle, edit, setEdit, todoId }) => {
  const { isLoading, mutateAsync } = useMutation({ mutationFn: saveTodos });

  const sendForm = async (e) => {
    e.preventDefault();

    try {
      await mutateAsync({ title });
      setTitle("");
      toast.success("یادداشت دخیره شد");
    } catch (error) {
      console.log(error.message, "error in post todo");
    }
  };
  const updateForm = async (e) => {
    e.preventDefault();

    try {
      await updateTodos(todoId, title);
      setTitle("");
      setEdit(false);
      toast.success("یادداشت ویرایش شد");
    } catch (error) {
      console.log(error.message, "error in post todo");
    }
  };

  return (
    <form
      className="w-[90%] lg:w-[50%] md:w-[75%] mx-auto relative mt-10"
      onSubmit={edit ? updateForm : sendForm}
    >
      <input
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="w-full outline-none h-[48px] rounded-xl px-2 border-none shadow-lg focus:bg-white transition-all duration-300 bg-gray-500"
      />

      {edit ? (
        <button className="w-[100px] absolute -left-1 border-none rounded-r-none top-0 h-[48px] bg-indigo-700 text-white rounded-xl">
          ویرایش
        </button>
      ) : (
        <button className="w-[100px] absolute -left-1 border-none rounded-r-none top-0 h-[48px] bg-indigo-700 text-white rounded-xl">
          {isLoading ? "صبرکنید" : "ارسال"}
        </button>
      )}
    </form>
  );
};

export default TodoForm;
