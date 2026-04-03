
const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const {summary} = require("../controllers/dashboardController");

router.get("/summary",auth,role("admin","analyst"),summary);

module.exports = router;
