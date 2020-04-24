//*  ROUTER - faqs.js

var express = require("express");
var router = express.Router();

const faqs_controller = require("../controllers/faqsController");

/* GET faqs page. */
router.get("/faqs", faqs_controller.showFaqs);

module.exports = router;
