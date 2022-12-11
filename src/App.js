import './App.css';
import { React, useState, useEffect } from "react";
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar/>
        <Chat/>
      </div>
      
    </div>
  );
}
export default App;
