const router = require("express").Router();
const { verifyUserToken, IsAdmin, IsUser } = require("../middleware/auth");
const userController = require("../controllers/user");

// Register a new User
router.post("/api/user", userController.register);

// Login
router.post("/api/login", userController.login);

// other routes

module.exports = router;
