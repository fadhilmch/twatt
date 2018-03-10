const express = require('express');
const router = express.Router();
const {getHomeTimeline, searchTweet, postTweet, getUserTimeline} = require('../controllers/twatt');

router.get('/home', getHomeTimeline);
router.get('/fadhilmch', getUserTimeline);
router.post('/search', searchTweet);
router.post('/post', postTweet);

module.exports = router;
