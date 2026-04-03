
const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const ctrl = require("../controllers/recordController");

router.post("/",auth,role("admin"),ctrl.create);
router.get("/",auth,role("admin","analyst","viewer"),ctrl.getAll);
router.put("/:id",auth,role("admin"),ctrl.update);
router.delete("/:id",auth,role("admin"),ctrl.delete);

module.exports = router;
