require('dotenv').config()
const express = require('express'),
    cors = require('cors'),
    PORT = process.env.PORT,
    app = express()
app.use(cors())


//   SOCKET SERVER 
const http = require("http"),
    server = http.createServer(app),
    socketIO = require("socket.io"),
    io = new socketIO.Server(server, {
        cors: {
            origin: "*",
        },
    }),
    socketEvents = require('./socket')


// SOCKET EVENTS
socketEvents(io)

server.listen(PORT, () => console.log("http server listening port ====", PORT));
