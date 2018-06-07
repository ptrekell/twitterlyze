module.exports = function (app, io) {

    app.get('/', (req, res) => {
        res.send("hi from websocket controller");
        
    });

    function handleIO(socket) {
        function disconnect() {
          clearInterval(intv);
          console.log("client disconnected");
        }
        console.log("client connected");
        socket.on("disconnect", disconnect);
      
      
        var intv = setInterval(function(){
            socket.emit("hello",Math.random());
        },1000);
      
      }
      
      io.on("connection",handleIO);


}