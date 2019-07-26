import React, { Component } from "react";
import io from "socket.io-client";
import SocketConnector from "./components/SocketConnecter";
import Login from "./components/Login";
import HangmanGame from "./components/HangmanGame";

//const localhostSocket = io.connect("http://localhost:3000");
const PORT = process.env.PORT || 3001;
console.log("http://" + window.location.hostname + ":" + PORT);
const localhostSocket = io.connect("http://" + window.location.hostname + ":" + PORT);


class App extends Component {
 
  render() {
    return (
      <Login socket={localhostSocket}>
        <SocketConnector />
        <HangmanGame />
      </Login>
    );
  }
}

export default App;
