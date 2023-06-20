const UserModels = require("../models/userModels");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "jwt with seyyed", {
    expiresIn: maxAge,
  });
};

module.exports.register = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const user = await UserModels.create({ username, email, password });
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ message: "خوش اومدی", created: token });
  } catch (error) {
    console.log(error.message, "error in register controller");
  }
};
module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserModels.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: false,
      maxAge: maxAge * 1000,
    });
    res.status(200).json({ user: user.email, message: "وارد شدید" });
  } catch (error) {
    console.log(error.message, "error in login controller");
  }
};

module.exports.checkuser = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, "jwt with seyyed", async (err, decodeToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await UserModels.findById(decodeToken.id);
          if (user) {
            res.json({ status: true, user: user });
          } else {
            res.json({ status: false });
            next();
          }
        }
      });
    }
  } catch (error) {
    console.log(error.message, "error in checkuser controller");
  }
};

module.exports.logout = async (req, res) => {
  try {
    res.cookie("jwt", "none", {
      expires: new Date(Date.now() + 5 * 1000),
      httpOnly: true,
    });
    res.status(200).json({ message: "خارج شدید" });
  } catch (error) {
    console.log(error.message, "error in logout controller");
  }
};
