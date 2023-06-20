const {
  getTodos,
  getTodoById,
  saveTodo,
  deleteTodo,
  updateTodo,
} = require("../controller/taskController");

const router = require("express").Router();

router.get("/all", getTodos);
router.get("/:id", getTodoById);
router.post("/", saveTodo);
router.put("/update/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
