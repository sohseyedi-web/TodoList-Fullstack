const { login, register, checkuser, logout } = require("../controller/userController");

const router = require("express").Router();

router.get("/", checkuser);
router.get("/logout", logout);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
