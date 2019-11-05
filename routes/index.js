var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root:  'public' });
});

router.get('/getinterval',async function(req,res,next) {
    var instrument = req.query.instrument;
    var note1 = "sound/C4" + instrument + ".mp3";
    var interval = Math.floor((Math.random() * 12) + 1);
    var noteName = "C"
    var octave = "4"
    if (interval == 1)
    {
        noteName = "C%23";
    }
    else if (interval == 2)
    {
        noteName = "D";
    }
    else if (interval == 3)
    {
        noteName = "Eb";
    }
    else if (interval == 4)
    {
        noteName = "E";
    }
    else if (interval == 5)
    {
        noteName = "F";
    }
    else if (interval == 6)
    {
        noteName = "F%23";
    }
    else if (interval == 7)
    {
        noteName = "G";
    }
    else if (interval == 8)
    {
        noteName = "Ab";
    }
    else if (interval == 9)
    {
        noteName = "A";
    }
    else if (interval == 10)
    {
        noteName = "Bb";
    }
    else if (interval == 11)
    {
        noteName = "B"
    }
    else if (interval == 12)
    {
        octave = "5";
    }
    var note2 = "sound/" + noteName + octave + instrument + ".mp3";
    var intervalInfo = {note1:note1, note2:note2, interval:interval};
    res.status(200).json(intervalInfo);
});

module.exports = router;
