//https://www.npmjs.com/package/twitter-stream-api
var TwitterStream = require('twitter-stream-api');

var keys = {
    consumer_key: "17nvVZoBZWztlFck8sDhWlixH",
    consumer_secret: "ApyX4vlAnRU8jo9HCRyrklK2rpE8tOHlvLFwB9jj8lHQhPupPe",
    token: "324240489-gycvSPDMC9jHNY2BDlV8nSrzQ3FSWzy4sml2wVCb",
    token_secret: "K68VS17t3znNSVJmDu1IImb9ALQna9k5XbtpNouvVUKme"
};


var Twitter = new TwitterStream(keys, false);
Twitter.stream('statuses/filter', {
    track: 'seattle',
    tweet_mode: 'extended',
});



module.exports = function (app, io) {

    app.get('/', (req, res) => {
        res.send("hi from websocket controller");

    });

    function handleIO(socket) {
        function disconnect() {
            //   clearInterval(intv);


            console.log("client disconnected");
        }
        console.log("client connected");
        socket.on("disconnect", disconnect);


        // var intv = setInterval(function(){
        //     socket.emit("hello",Math.random());
        // },1000);

        Twitter.on('data', function (tweetObj) {

            var tweetObj = JSON.parse(tweetObj);


            var english = /^[A-Za-z0-9]*$/;

            if (tweetObj.user.location && tweetObj.user.location !== "Global" ) {
                    socket.emit("tweet", tweetObj);         
            }
            // console.log("tweet",JSON.parse(obj).text);
            // console.log('data', obj.toString('utf8'));
        });




    }

    io.on("connection", handleIO);


}