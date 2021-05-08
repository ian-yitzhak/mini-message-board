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
	text: "go watch a match",
    user: "philaden",
    added: new Date(),


}
]

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { messages, title: "Mini Message Board" });
});

//dispalay the form page


router.get("/new", function (req, res) {
  res.render("form");
});

//create items

router.post("/new", function (req, res) {

	const context = {
		text: req.body.text, 
		user: req.body.user, 
		added: new Date()}
  
  messages.push(context);

  res.redirect("/");
});

module.exports = router;