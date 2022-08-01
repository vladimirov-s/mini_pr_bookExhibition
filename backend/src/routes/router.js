const express = require("express");
const router = express.Router();
const fileSaver = require("../middlewares/multer-saver");
const {
  getBooks,
  createBook,
  deletOneBook,
  getOneBook,
} = require("../controllers/controller");

router.get("/", getBooks);
router.post("/", fileSaver.array("picture", 6), createBook);
router.get("/:id", getOneBook);
router.delete("/:id", deletOneBook);

module.exports = router;
