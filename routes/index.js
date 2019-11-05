var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root:  'public' });
});

router.get('/getinterval',async function(req,res,next) {
    var instrument = req.query.instrument;
    var note1 = "sound/C4" + instrument + ".mp3";
    var note2 = "sound/G4" + instrument + ".mp3";
    var interval = 7;
    var intervalInfo = {note1:note1, note2:note2, interval:interval};
    console.log(note1);
    console.log(intervalInfo);
    res.status(200).json(intervalInfo);
});

module.exports = router;
