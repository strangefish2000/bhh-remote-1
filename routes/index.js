var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Home" });
});

// /* GET about page. */
router.get("/about", function(req, res, next) {
  res.render("about", { title: "About" });
});

/* GET services page. */
router.get("/services", function(req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET gallery page. */
router.get("/gallery", function(req, res, next) {
  res.render("gallery", { title: "Gallery" });
});

/* GET quote page. */
router.get("/quote", function(req, res, next) {
  res.render("quote", { title: "QUOTE" });
});

/* GET testimonials page. */
router.get("/testimonials", function(req, res, next) {
  res.render("testimonials", { title: "Testimonials" });
});

/* GET contact page. */
router.get("/contact", function(req, res, next) {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
