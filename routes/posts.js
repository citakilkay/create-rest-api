const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => { // --> /posts koysan da aynı route'a gider.
try{
    const posts = await Post.find({}).lean();
    res.json(posts);
} catch (err) {
    res.json({ message: err });
}
});
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId).lean();
        res.json(post);
    } catch {
        res.json({message: err });
    } finally {
        console.log('ilkay citak her şey');
    }
})
router.get('/specific', (req, res) => {
    res.send('Burası da Specific Post');
});
router.post('/', (req, res) => {
    const post = new Post({
        title : req.body.title,
        description: req.body.description
    });
    post.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.json({message: err });
    });
    // daha temizi aşağıdaki gibi async ve await ile yapılır. line 11 e async yazınca onu await ediyoruz
    /*try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err});
    }*/
});
router.delete('/:postId', async (req, res) => {
    try{
       const removedPost = await Post.remove({ _id: req.params.postId });
       res.json(removedPost);
    } catch (err) {
        res.json({ message: err});
    }
})
router.patch('/:postId', async (req, res) => {
    try{
        // id'ye göre bul ve set kısmında belirtileni req.body'den aldığın şeyle değiştir.
        const updatedPost = await Post.uptadeOne({_id: req.params.postId}, {$set: {title: req.body.title}});
    } catch(err) {
        res.json({ message: err });
    }
})


module.exports = router;