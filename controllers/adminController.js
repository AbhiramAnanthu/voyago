const { Country, Destination } = require("../model/models");

const createCountry = async (req, res) => {
  try {
    const countryJson = req.body;
    const newCountry = new Country(countryJson);
    const result = await newCountry.save();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.send(500).json({"message":"internal server error. Check the logs"})
  }
};

const createDestinations = async (req, res) => {
  try {
    const destinationJson = req.body;
    const newDestination = new Destination(destinationJson);
    const result = await newDestination.save();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.send(500).json({"message":"internal server error. Check the logs"})
  }
};

const getCountry = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Country.findById(id);
    if (response) {
      res.send(200).json(response);
    } else {
      res.send(404).json({ message: "Country not found" });
    }
  } catch (err) {
    console.error(err);
    res.send(500).json({"message":"internal server error. Check the logs"})
  }
};

const getDestinations = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Destination.findById(id);
    if (response) {
      res.send(200).json(response);
    } else {
      res.send(404).json({ message: "Destination not found" });
    }
  } catch (err) {
    console.error(err);
    res.send(500).json({"message":"internal server error. Check the logs"})
  }
};
module.exports = {
  createCountry,
  createDestinations,
  getCountry,
  getDestinations,
};
