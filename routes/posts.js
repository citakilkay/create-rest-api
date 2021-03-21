const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
    res.render('Buralar Hep Post');
});
router.get('/specific', (req, res) => {
    res.render('Burası da Specific Post');
});

module.exports = router;