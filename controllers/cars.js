const Car = require("../models/cars");

exports.getAllCars = async (req, res) => {
  try {
    const result = await Car.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Auta nalezena",
        payload: result
      })
    }
    res.status(500).send({
      msg: " auta proste nejsou"
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getCarById = async (req, res) => {
  try {
    const result = await Car.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Auta nalezena",
        payload: result
      })
    }
    res.status(500).send({
      msg: " auta proste nejsou"
    });
  } catch (error) {
    res.status(500).send(error);
  }
  };
  
exports.postCar = async (req, res) => {
  try {
    const myNewCar = new Car({
      name: req.body.name,
      model: req.body.model,
      color: req.body.color,
      shifting: req.body.shifting,
      year: req.body.year
    });
    const result = await myNewCar.save();
    if (result) {
      return res.status(201).send({
        msg: "Bylo vytvořeno nové auto",
        payload: result
      });
    }
  } catch (error) {
    res.status(500).send({
      msg: "Auto nebylo vytvoreno"
    });
  }
};

exports.updateCarById = async (req, res) => {
  try {
    const update = {
      name: req.body.name,
      model: req.body.model,
      color: req.body.color,
      shifting: req.body.shifting,
      year: req.body.year
    };
    const result = await Car.findByIdAndUpdate(req.params.id, update);
    if (result) {
      return res.status(200).send({
        msg: "auto bylo upraveno",
        payload: result
      });
    }
    res.status(500).send({
      msg: "auto nebylo upraveno"
    });
  } catch (error) {
    res.status(500).send({
      msg: "Auto nebylo upraveno"
    });
  }
};
exports.patchCarById = async (req, res) => {
 
  try {
    const update = {
    };
    for (const ops of req.body) {
      update[ops.propName] = ops.value;
    }
    const result = await Car.findByIdAndUpdate(req.params.id, update);
    if (result) {
      return res.status(200).send({
        msg: "auto bylo upraveno",
        payload: result
      });
    }
    res.status(500).send({
      msg: "Auto nebylo upraveno"
    });
  }
  catch (error) {
      res.status(500).send(error);
    }
  };
exports.deleteCarById = async (req, res) => {
  try {
    const result = await Car.findByIdAndDelete(req.params.id);
    if (result) {
    return res.status(200).send({
      msg: "auto bylo smazano",
      payload: result
    });
  }
  res.status(500).send({
    msg: "Auto nebylo smazano"
  });
} catch (error) {
  res.status(500).send(error);
}
};
