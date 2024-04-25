const photoModel = require("../models/photoModel.js");

const createPhoto = async function (req, res) {
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
    const createddata = await photoModel.create(pdata);
    return res
      .status(201)
      .send({ status: true, message: "success", data: createddata });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }
};
const getphotoList = async function (req, res) {
  try {
    const list = await photoModel.find();
    return res
      .status(200)
      .send({ status: true, message: "Register photo list", data: list });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};
module.exports = { createPhoto, getphotoList };