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

    getUserTimeline(req, res) {
        oauth.get(
            `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=fadhilmch`,
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
        let searchItem = req.query.q;
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${searchItem}`,
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
        let postedTweet = req.query.status;
        oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            {status: postedTweet},
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
