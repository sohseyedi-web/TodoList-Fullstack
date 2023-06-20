const userRoutes = require("./userRouter");
const tasksRoutes = require("./taskRouter");

const router = require("express").Router();

router.use("/auth", userRoutes);
router.use("/tasks", tasksRoutes);

module.exports = router;
