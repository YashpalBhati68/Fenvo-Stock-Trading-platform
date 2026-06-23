const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }

    const user = await User.findById(data.id);
    if (user) {
      return res.json({ status: true, user: user.username });
    } else {
      return res.json({ status: false });
    }
  });
};

module.exports.verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized — no token" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.userId = data.id;
    next();
  });
};

// require("dotenv").config();
// const jwt = require("jsonwebtoken");
// const { UserModel } = require("../model/UserModel");

// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token
//   if (!token) {
//     return res.json({ status: false })
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//      return res.json({ status: false })
//     } else {
//       const user = await UserModel.findById(data.id)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   })
// }
