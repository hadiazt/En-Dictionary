const { Router } = require("express");
const router = new Router();

const CambDict = require("camb-dict");
const dictionary = new CambDict.Dictionary();
dictionary.meaning("dictionary").then(console.log).catch(console.error);

router.get("/", (req, res) => {
    var WORD = req.query.word

    res.render("index", {
        icon: "https://cdn-icons-png.flaticon.com/512/1902/1902654.png",
        pageTitle: "EN Dictionary",
        WORD,
        dictionary,
        layout: "./"
    });


});


module.exports = router;
