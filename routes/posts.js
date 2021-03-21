const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => { // --> /posts koysan da aynı route'a gider.
    res.render('Buralar Hep Post');
});
router.get('/specific', (req, res) => {
    res.render('Burası da Specific Post');
});
router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;