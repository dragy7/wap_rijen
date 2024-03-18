const express = require("express");
const router = express.Router();

const animalsCotroller = require("../controllers/animals");
/**
 * Get all Animals
 * URL: /Animals
 * Method: Get
 */
router.get("/",animalsCotroller.getAllAnimals);
/**
 * Get Animal
 * by id
 * URL: /Animals/:idid
 * Method: GET
 */
router.get("/:id",animalsCotroller.getAnimalById);
/**
 * Create Animals
 * URL: /Animals
 * Method: POST
 */
router.post("/:id",animalsCotroller.postAnimalById);
/**
 * Updated Animal
 *
 * URL: /Animals/:id
 * Method: PUT
 */
router.put("/:id",animalsCotroller.updateAnimalById);
/**
 * Updated Animal
 *
 * URL: /Animals/:id
 * Method: PATCH
 */
router.patch("/:id",animalsCotroller.patchAnimalById);
/**
 * Delete Animal
 *
 * URL: /Animals/:id
 * Method: DELETE
 */
router.delete("/:id",animalsCotroller.deleteAnimalById);

module.exports = router;
