const {
  createCountry,
  createDestinations,
  getCountry,
  getDestinations,
} = require("../controllers/adminController");

const router = require("express").Router();

//@desc create a country
//@api POST /api/admin/create-country
router.post("/admin/create-country/", createCountry);

//@desc create a destination
//@api POST /api/admin/create-destination
router.post("/admin/create-destination/", createDestinations);

//@desc get a country
//@api GET /api/admin/get-country/:id
router.get("/admin/get-country/:id", getCountry);

//@desc get a destination
//@api GET /api/admin/get-destination
router.get("/admin/get-destination/:id", getDestinations);

module.exports = router;
