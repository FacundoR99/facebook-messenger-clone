import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import Flipmove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const name = prompt("Please enter you name");
    setUsername(name);
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100"
        alt=""
      />
      <h1>Hi Facu</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            value={input}
            type="text"
            placeholder="Enter message.."
            onChange={(event) => setInput(event.target.value)}
            className="app__input"
          />

          <IconButton
            disabled={!input}
            variant="contained"
            type="submit"
            onClick={sendMessage}
            className="app__iconBtn"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <Flipmove>
        {messages.map((message) => (
          <Message
            key={message.id}
            username={username}
            message={message.message}
          />
        ))}
      </Flipmove>
    </div>
  );
}

export default App;