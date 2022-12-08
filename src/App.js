import './App.css';
import { React, useState, useEffect } from "react";
import Sidebar from './Components/Sidebar/Sidebar';
function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar/>
      </div>
      
    </div>
  );
}
export default App;
