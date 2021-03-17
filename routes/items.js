const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.items.index);
router.get("/signup", ctrl.items.renderSignup);
router.post("/signup", ctrl.items.signup);
router.get("/login", ctrl.items.renderLogin);
router.post("/login", ctrl.items.login);
router.get("/profile/:id", ctrl.items.renderProfile);
router.delete('/:id', ctrl.items.deleteUser);
router.put('/profile/:id', ctrl.items.editProfile);
router.delete('/profile/:id', ctrl.items.removeLog);
router.put('/profile/:id', ctrl.items.addLog);


module.exports = router;