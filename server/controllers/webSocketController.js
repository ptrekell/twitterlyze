//https://www.npmjs.com/package/twitter-stream-api
var TwitterStream = require('twitter-stream-api');

var keys = {
    consumer_key: "17nvVZoBZWztlFck8sDhWlixH",
    consumer_secret: "ApyX4vlAnRU8jo9HCRyrklK2rpE8tOHlvLFwB9jj8lHQhPupPe",
    token: "324240489-gycvSPDMC9jHNY2BDlV8nSrzQ3FSWzy4sml2wVCb",
    token_secret: "K68VS17t3znNSVJmDu1IImb9ALQna9k5XbtpNouvVUKme"
};






module.exports = function (app, io) {

    app.get('/', (req, res) => {
        res.send("hi from websocket controller");

    });

    let twitterConnections = [];



    function handleIO(socket) {

        function disconnect() {
            //   clearInterval(intv);
            console.log("client disconnected ");
        }

        console.log("client connected", socket.id);


        socket.on("disconnect", disconnect);


        socket.on("removesocket", (socketId) => {

                console.log("I should disconnect ", socketId);


            if (twitterConnections.length) {
                let twitterConnectionToRemove;
                twitterConnections.map(twitterConnection => {


    

                    if (twitterConnection.socketId === socketId.match(/#(.*)/)[1]) {
                        socket.emit("newSocketForSearchValue", { socketId: socketId, searchValue: "removingSocket" });
                        console.log("disconnecting twitter connection for socket id", socketId.match(/#(.*)/)[1])
                        console.log("twitter connection item",JSON.stringify(twitterConnection));
                        
                        if(io.sockets.connected[socketId.match(/#(.*)/)[1]]) {
                        io.sockets.connected[socketId.match(/#(.*)/)[1]].disconnect();
                        twitterConnection.twitterConnection.close();
                        twitterConnectionToRemove = {...twitterConnection};
                        }
                        
                    }
                });

                //remove the connection from the array of twitter connections
                if(twitterConnectionToRemove) {
                    console.log("twitterConnections array before filter: ", twitterConnections);
                    twitterConnections = twitterConnections.filter( item => item.socketId !== twitterConnectionToRemove.socketId)
                    console.log("twitter connection removed from twitterConnections array");
                    console.log("twitterConnections array now: ", twitterConnections);
                }


            }

        })


        socket.on('searchValue', (value) => {
            // console.log("hi", value);



            socket.broadcast.emit("newSocketForSearchValue", { socketId: socket.id, searchValue: value });

            var Twitter = new TwitterStream(keys, false);

            twitterConnections.push({ socketId: socket.id.match(/#(.*)/)[1], twitterConnection: Twitter });
            // console.log("searched for value, my sockets ", JSON.stringify(twitterConnections));

            Twitter.stream('statuses/filter', {
                track: value,
                tweet_mode: 'extended',

            });

            Twitter.on('connection success', function (uri) {
                console.log('connection success', uri);
            });

            Twitter.on('connection rate limit', function (httpStatusCode) {
                console.log('connection rate limit', httpStatusCode);
            });
   


            Twitter.on('data', function (tweetObj) {


                // console.log("got data");
                var tweetObj = JSON.parse(tweetObj);
                // console.log("location",tweetObj.user.location);


                var english = /^[A-Za-z0-9]*$/;

                tweetObj.searchWord = value;
                tweetObj.socketId = socket.id;

                console.log(`data for ${value} on socket ${socket.id}`);

                if (tweetObj.user.location) {
                    // console.log("ok sending");
                    socket.broadcast.emit("tweet", tweetObj);
                }

            });
        });



    }

    var nsp = io.of('/twitterStream');
    nsp.on("connection", handleIO);


}