const { Router } = require("express");
const router = new Router();

const CambDict = require("camb-dict");
const dictionary = new CambDict.Dictionary();

var OUTPUT = []
var ERR = []

router.get("/", (req, res) => {
    var WORD = req.query.word

    if (WORD) {
        dictionary.meaning(WORD).then(response => {
            OUTPUT.push({
                'word': response.word,
                'meaning': response.meaning,
                'pronounciation': response.pronounciation,
                'type': response.type,
                'examples': response.examples,
                'audio': response.audio
            })
        }).catch(e => { ERR.push(e) && console.log(e) })

        if (OUTPUT[0] || ERR[0]) {
            setTimeout(() => {
                res.render("index", {
                    icon: "https://cdn-icons-png.flaticon.com/512/1902/1902654.png",
                    pageTitle: "EN Dictionary",
                    WORD,
                    OUTPUT: OUTPUT[0],
                    ERR: ERR[0],
                    layout: "./"
                });
            }, 6000);
        }
    } else {
        res.render("index", {
            icon: "https://cdn-icons-png.flaticon.com/512/1902/1902654.png",
            pageTitle: "EN Dictionary",
            WORD,
            OUTPUT: OUTPUT[0],
            ERR: ERR[0],
            layout: "./"
        });
    }



});


module.exports = router;
