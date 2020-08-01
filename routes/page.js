const express = require("express");
const {
  getPage,
  createPage,
  updatePage,
  deletePage
} = require("../controllers/page");

const router = express.Router();

router
  .route("/")
  .get(getPage)
  .post(createPage);

router
  .route("/:id")
  .get(getPage)
  .put(updatePage)
  .delete(deletePage);

module.exports = router;