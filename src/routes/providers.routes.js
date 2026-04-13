const express = require("express");
const router = express.Router();

const {
  getProviders,
  getProviderId,
  createProvider,
  updateProvider,
  deleteProvider,
} = require("../controllers/provider.controller");

router.get("/", getProviders);
router.get("/:id", getProviderId); 
router.post("/", createProvider);
router.put("/:id", updateProvider); 
router.delete("/:id", deleteProvider);

module.exports = router;