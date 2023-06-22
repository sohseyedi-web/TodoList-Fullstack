import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Header from "./TopSide";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
const Panel = () => {
  const [title, setTitle] = useState("");
  const [edit, setEdit] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [cookies, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.jwt) {
      navigate("/login");
    }
  }, [cookies, navigate]);

  const updateTodo = (id, text) => {
    setEdit(!edit);
    setTodoId(id);
    setTitle(text);
  };

  return (
    <>
      <Header remove={removeCookie} />
      <section className="max-w-7xl mx-auto container">
        <TodoForm
          title={title}
          setTitle={setTitle}
          todoId={todoId}
          edit={edit}
          setEdit={setEdit}
        />
        <TodoList updateTodo={updateTodo} />
      </section>
    </>
  );
};

export default Panel;
