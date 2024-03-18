const express = require("express");
const router = express.Router();

const phoneControllers = require("../controllers/phones");
/**
 * Get all phones
 * URL: /phones
 * Method: Get
 */
router.get("/", phoneControllers.getAllPhones);
/**
 * Get Phone
 * by id
 * URL: /phones/:id
 * Method: GET
 */
router.get("/:id", phoneControllers.getPhoneById);
/**
 * Create phones
 * URL: /phones
 * Method: POST
 */
router.post("/:id", phoneControllers.postPhoneById);
/**
 * Updated Phone
 *
 * URL: /phones/:id
 * Method: PUT
 */
router.put("/:id", phoneControllers.updatePhoneById);
/**
 * Updated Phone
 *
 * URL: /phones/:id
 * Method: PATCH
 */
router.patch("/:id", phoneControllers.patchPhoneById);
/**
 * Delete Phone
 *
 * URL: /phones/:id
 * Method: DELETE
 */
router.delete("/:id", phoneControllers.deletePhoneById);

module.exports = router;
