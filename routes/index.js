const { Router } = require("express");
const router = new Router();

const CambDict = require("camb-dict");
const dictionary = new CambDict.Dictionary();

var OUTPUT = []
var ERR = []
router.get("/", (req, res) => {
    var WORD = req.query.word
    if (WORD) {
        dictionary.meaning(WORD).then(response => { OUTPUT.push(response) }).catch(e => { ERR.push(e) })
    }
    res.render("index", {
        icon: "https://cdn-icons-png.flaticon.com/512/1902/1902654.png",
        pageTitle: "EN Dictionary",
        WORD,
        OUTPUT: OUTPUT[0],
        ERR: ERR[0],
        layout: "./"
    });


});


module.exports = router;
