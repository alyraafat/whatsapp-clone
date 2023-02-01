import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { InsertEmoticon, Mic, SearchOutlined } from '@mui/icons-material';
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Chat.css';
import axios from '../../axios';

function Chat({ messages }) {
  const [input, setInput] =  useState("");
  const sendMessage = async e => {
      e.preventDefault();
      await axios.post('/messages/new',{
        "message":input,
        "name":"demo name",
        "timestamp":"noww",
        "received":false
      })
      setInput("");
  };
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar/>
        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p> Last seen at ....</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
              <SearchOutlined/>
          </IconButton>
          <IconButton>
              <AttachFile/>
          </IconButton>
          <IconButton>
              <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        {messages.map(message=>
          <p className={`chat__message ${message.received && "chat__receiver"}`}>
            <span className='chat__name'>{message.name}</span>
              {message.message}
            <span className='chat__timestamp'>{message.timestamp}</span>
          </p>
        )}
      </div>
      <div className='chat__footer'>
        <InsertEmoticon/>
        <form>
          <input 
            value={input}
            onChange={e=>setInput(e.target.value)}
            placeholder='Type a message'
            type="text"
          />
          <button 
            onClick={sendMessage} 
            type='submit'
          >
            Send a message
          </button>
        </form>
        <Mic/>
      </div>
    </div>
  )
}

export default Chat
