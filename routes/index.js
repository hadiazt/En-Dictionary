const { Router } = require("express");
const router = new Router();

const CambDict = require("camb-dict");
const dictionary = new CambDict.Dictionary();

var ERR = []

router.get("/", (req, res) => {
    var WORDI = req.query.word

    if (WORDI) {

        dictionary.meaning(WORDI.toLowerCase()).then(response => {
            res.render("index", {
                icon: "https://cdn-icons-png.flaticon.com/512/1902/1902654.png",
                pageTitle: "EN Dictionary",
                WORDI,
                word: response.word,
                meaning: response.meaning,
                pronounciation: response.pronounciation,
                type: response.type,
                examples: response.examples,
                audio: response.audio,                                
                layout: "./"
            });
        }).catch(e => {
            // res.render("index", {
            //     icon: "https://cdn-icons-png.flaticon.com/512/1902/1902654.png",
            //     pageTitle: "EN Dictionary",
            //     WORDI,
                 
            //     e,                 
            //     layout: "./"
            // }) && 
            console.log(e)
        })
    } else {
        res.render("index", {
            icon: "https://cdn-icons-png.flaticon.com/512/1902/1902654.png",
            pageTitle: "EN Dictionary",
            WORDI,
            layout: "./"
        });
    }



});


module.exports = router;
