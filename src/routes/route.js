const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const photoController = require("../controllers/photoController");
const documentController = require("../controllers/documentController");
const businessController = require("../controllers/businessController");
const flyerController = require("../controllers/flyerController");



//User's APIs -> Sign up, Login and Enter OTP.
router.post("/SignUp", userController.signUp);
router.post("/login", userController.login);
router.post("/enterOtp", userController.enterOtp);

//......photos Api......//
router.post("/createPhoto/:_id", photoController.createPhoto);
router.get("/getphoto", photoController.getphotoList);

//......document api....//

router.post("/createdocument/:_id", documentController.createdocument);
router.get("/getdocument", documentController.getdocumentList);

//.......business api......//

router.post("/createbus/:_id", businessController.createbusiness);
router.get("/getbus", businessController.getbusinessList);


//......flyer api......//

router.post("/createflyer/:_id", flyerController.createflyer);
router.get("/getflyer", flyerController.getflyerList);





module.exports = router;