const todoSchema = require("../models/taskModels");

module.exports.getTodos = async (req, res) => {
  const todos = await todoSchema.find({});
  res.status(200).json({ todos, message: "get all todo" });
};
module.exports.getTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = await todoSchema.findById(id);
  res.status(200).json({ todo, message: "get todo" });
};

module.exports.saveTodo = async (req, res) => {
  try {
    const todos = new todoSchema(req.body);
    await todos.save();
    res.status(201).json({ todos, message: "post todo success" });
  } catch (error) {
    console.log(error.message, "error in saveTodo");
  }
};

module.exports.updateTodo = async (req, res) => {
  try {
    console.log(req.params);

    await todoSchema.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title },
      { new: true }
    );
    const todos = await todoSchema.find({});
    res.status(201).json({ todos, message: "update todo success" });
  } catch (error) {
    console.log(error.message, "error in saveTodo");
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await todoSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "delete todo success" });
  } catch (error) {
    console.log(error.message, "error in delete todo");
  }
};
