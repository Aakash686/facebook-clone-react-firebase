import React, { useState, useEffect } from 'react';
import { Button } from "@material-ui/core";
import { FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({message: doc.data(), id: doc.id})))
    })
  },[])
  
  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, [])
  
  const sendMessage = (event) => {
      event.preventDefault();
      db.collection('messages').add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      
      
      setInput("")
  }
  
  return (
    <div className="App">
      
      <img src="data:image/png;base64,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" />
      <h1>Hello Programmers</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
          
          
          <IconButton className="app__iconButton" disabled={!input} variant="contained" type="submit" color="primary" onClick={sendMessage}>
              <SendIcon />
          </IconButton>
          
          
          
        </FormControl>
        

        
      </form>
      <FlipMove>
      {
        messages.map(({id, message}) => (
        <Message key={id} username={username} message={message} />
        
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
