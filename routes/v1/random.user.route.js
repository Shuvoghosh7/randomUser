const express = require("express");
const randomUsers = require("../../controller/randon.controller");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/veiwCount");
const router = express.Router();


router
  .route("/random")
  .get(viewCount,randomUsers.getRandomUser)
router
  .route("/all")
  .get(viewCount,randomUsers.getAllUser)
router
  .route("/save")
  .post(viewCount,randomUsers.saveUser)
router
  .route("/update/:id")
  .patch(viewCount,randomUsers.updateUser)

router
  .route("/delete/:id")
  .delete(viewCount,randomUsers.deleteUser)

  module.exports = router;