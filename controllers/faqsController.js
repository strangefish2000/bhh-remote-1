//*  faqsController - faqs.js

const Faqs = require("../models/faqs");

module.exports = {
  showFaqs: showFaqs
};

function showFaqs(req, res) {
  // get all events
  Faqs.find({}, (err, faqs) => {
    if (err) {
      res.status(404);
      res.send("Faqs not found!");
    }

    // return a view with data
    res.render("views/faqs_list", {
      faqs: faqs
    });
  });
}
