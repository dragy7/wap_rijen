exports.getAllPhones = (req, res) => {
  res.send("Get all phones");
};
exports.getPhoneById = (req, res) => {
  res.send(`Get phone ${req.params.id} `);
};
exports.postPhoneById = (req, res) => {
  res.send(`Created phone: ${req.params.id}`);
};
exports.updatePhoneById = (req, res) => {
  res.send(`Updated phone: ${req.params.id}`);
};
exports.patchPhoneById = (req, res) => {
  res.send(`Patched phone: ${req.params.id}`);
};
exports.deletePhoneById = (req, res) => {
  res.send(`Deleted phone: ${req.params.id}`);
};
