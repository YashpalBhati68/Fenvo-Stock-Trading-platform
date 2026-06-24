const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const { createSecretToken } = require("../util/SecretToken");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify", userVerification); 

module.exports = router;

// const { Signup, Login } = require("../controllers/AuthController");
// const { userVerification } = require("../Middlewares/AuthMiddleWare");
// const router = require("express").Router();

// router.post("/signup", Signup);
// router.post('/login', Login);
// router.post('/',userVerification);

// module.exports = router; 