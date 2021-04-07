const express = require("express");
const controller = require("./../controllers/controller");

const router = express.Router();

router
  .route("/compose")
  .get(controller.renderCompose)
  .post(controller.writeCompose);

module.exports = router;
