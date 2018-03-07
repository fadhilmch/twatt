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

module.exports = {
    getHomeTimeline(req, res) {
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            (err, data) => {
                if (err) {
                    return res.status(404).json({
                        message: "Error get timeline data",
                        err
                    })
                }
                return res.status(200).json({
                    message: "Get the home timeline data",
                    data: JSON.parse(data)
                })
            }
        );
    },

    searchTweet(req,res){
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.search}`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            (err, data) => {
                if (err) {
                    return res.status(404).json({
                        message: "Error get tweet searched",
                        err
                    })
                }
                return res.status(200).json({
                    message: "Get the tweet searched",
                    data: JSON.parse(data)
                })
            }
        );
    },

    postTweet(req,res){
        oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            {status: req.body.update},
            (err, data) => {
                if (err) {
                    return res.status(404).json({
                        message: "Error update status",
                        err
                    })
                }
                return res.status(200).json({
                    message: "Status Updated",
                    data: JSON.parse(data)
                })
            }
        );
    }
}
