exports.getAllAnimals = (req, res) => {
  res.send("Get all Animals");
};
exports.getAnimalById = (req, res) => {
  res.send(`Get Animal ${req.params.id} `);
};
exports.postAnimalById = (req, res) => {
  res.send(`Created Animal: ${req.params.id}`);
};
exports.updateAnimalById = (req, res) => {
  res.send(`Updated Animal: ${req.params.id}`);
};
exports.patchAnimalById = (req, res) => {
  res.send(`Patched Animal: ${req.params.id}`);
};
exports.deleteAnimalById = (req, res) => {
  res.send(`Deleted Animal: ${req.params.id}`);
};
