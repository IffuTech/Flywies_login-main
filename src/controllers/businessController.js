const businessModel = require("../models/businessModel.js");

const createbusiness = async function (req, res) {
  try {
    let userId = req.params._id;
    
    let requestBody = req.body;
    let { title, highquality, customSize, price } = requestBody;

    let pdata = {
      title,
      highquality,
      customSize,
      price,
    };
    const createddata = await businessModel.create(pdata);
    return res
      .status(201)
      .send({ status: true, message: "success", data: createddata });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }
};
const getbusinessList = async function (req, res) {
  try {
    const list = await businessModel.find();
    return res
      .status(200)
      .send({ status: true, message: "Register Business list", data: list });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};
module.exports = { createbusiness, getbusinessList };
