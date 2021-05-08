var express = require("express");
var router = express.Router();

router.use(express.urlencoded({ extended: true }));

const messages = [

{
	text: "Hello there!",
    user: "ian",
    added: new Date(),
},

{
	text: "Hello iano",
    user: "ian0",
    added: new Date(),


}
]

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages, title: "Mini Message Board" });
});

router.get("/new", function (req, res, next) {
  // Some function for processing the request goes here.
  res.render("form");
});

router.post("/new", function (req, res, next) {

	const context = {
		text: req.body.text, 
		user: req.body.user, 
		added: new Date()}
  
  messages.push(context);

  res.redirect("/");
});

module.exports = router;