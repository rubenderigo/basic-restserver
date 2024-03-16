const { Router } = require("express");

const {
  getUser,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/user");

const router = Router();

router.get("/", getUser);

router.put("/:id", updateUser);

router.post("/", createUser);

router.delete("/", deleteUser);

module.exports = router;
