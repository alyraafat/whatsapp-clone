import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import { InsertEmoticon, Mic, SearchOutlined } from '@mui/icons-material';
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Chat.css';

function Chat() {
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
        <p className='chat__message'>
          <span className='chat__name'>Aly</span>
          This is a message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message chat__receiver'>
          <span className='chat__name'>Aly</span>
          This is a message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className='chat__footer'>
        <InsertEmoticon/>
        <form>
          <input 
            placeholder='Type a message'
            type="text"
          />
          <button type='submit'>
            Send a message
          </button>
        </form>
        <Mic/>
      </div>
    </div>
  )
}

export default Chat
