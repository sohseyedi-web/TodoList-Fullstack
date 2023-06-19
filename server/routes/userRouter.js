const { login, register, checkuser } = require("../controller/userController");

const router = require("express").Router();

router.get("/", checkuser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
