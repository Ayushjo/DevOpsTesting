import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection",function(socket){
    console.log("Connected")
    socket.send("Hello World")
})
