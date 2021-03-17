const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.logs.getAll); // index
// router.get("/new", ctrl.logs.renderNew); // renderNew
// router.post("/", ctrl.logs.postLog); // post
// router.get("/:id", ctrl.logs.show); // show
// router.get("/:id/edit", ctrl.logs.renderEdit); // renderEdit
// router.put("/:id", ctrl.logs.editLog); // edit
// router.delete("/:id", ctrl.logs.deleteLog); // delete

module.exports = router;
