const mongoose = require("mongoose");

// Country Schema
const countrySchema = new mongoose.Schema({
  name: String,
  code: String,
  currency: String,
  language: String,
  regions: [String],
  popular_destinations: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Destinations" },
  ],
  emergency_numbers: {
    police: String,
    ambulance: String,
    fire: String,
    general_emergency: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Country = mongoose.model("Country", countrySchema);

// Destination Schema
const destinationSchema = new mongoose.Schema({
  name: String,
  country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
  description: String,
  geography: {
    latitude: Number,
    longitude: Number,
  },
  popular_attractions: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = { Country, Destination };
