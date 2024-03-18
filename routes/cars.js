const express = require("express");
const router = express.Router();

const carsCotroller = require("../controllers/cars");
/**
 * Get all cars
 * URL: /cars
 * Method: Get
 */
router.get("/", carsCotroller.getAllCars);
/**
 * Get car by id
 * URL: /cars/:id
 * Method: GET
 */
router.get("/:id", carsCotroller.getCarById);
/**
 * Create cars
 * URL: /cars
 * Method: POST
 */
router.post("/", carsCotroller.postCar);
/**
 * Updated car
 * URL: /cars/:id
 * Method: PUT
 */
router.put("/:id", carsCotroller.updateCarById);
/**
 * Updated car
 * URL: /cars/:id
 * Method: PATCH
 */
router.patch("/:id", carsCotroller.patchCarById);
/**
 * Delete car
 * URL: /cars/:id
 * Method: DELETE
 */
router.delete("/:id", carsCotroller.deleteCarById);

module.exports = router;
