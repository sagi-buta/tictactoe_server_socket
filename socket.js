module.exports = (io) => {
    io.on("connection", (socket) => {
        const newUser = {
            // userName: socket.handshake.query.userName,
            id: socket.id,
        };
        console.log("socketId: ", socket.id, "  is connecting  now ...");
        socket.emit("welcomeToTICTACTOE...", newUser.id);

    })
}






