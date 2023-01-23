const { signUp } = require("../controllers/user-controllers");

const router = require("express").Router();

router.post("/signUp", signUp);

module.exports = router;