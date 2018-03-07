const express = require('express');
const router = express.Router();
const {getHomeTimeline, searchTweet, postTweet} = require('../controllers/twatt');

router.get('/home', getHomeTimeline);
router.post('/search', searchTweet);
router.post('/post', postTweet);

module.exports = router;
