const express = require('express');
const router = express.Router();
const OAuth = require('oauth');

const oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );


router.get('/', (req, res) => {
    oauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        process.env.TOKEN,
        process.env.TOKEN_SECRET,
        (err, data) => {
            if(err){
                return res.status(404).json({
                    message: "Error"
                    err
                })
            }
            return res.status(200).json({
                message: "Get the home timeline data",
                data
            })
        }
    );

});

module.exports = router;
