const router = require("express").Router();
const path = require("path");
const deliverymodels = require("../models/deliveryschema");

router.get("/", async (req, res) => {
  try {
    // Fetch all todos from the database
    const alldeliverylist = await deliverymodels.find();

    // Render the index view and pass the fetched todos to it
    res.render("index", { deliverymodels: alldeliverylist });
  } catch (error) {
    // Handle errors
    console.log(error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});


module.exports = router;
