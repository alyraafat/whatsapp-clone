import './App.css';
import { React, useState, useEffect } from "react";
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
import Pusher from 'pusher-js';
import axios from './axios';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route, Navigate, Link  } from "react-router-dom"
import SignUp from './Components/SignUp/SignUp';

function App() {
  // const [messages,setMessages] = useState([]);
  // //responsible for fetching all messages at first only
  // useEffect(()=>{
  //   axios.get("/messages/sync")
  //   .then(response => {
  //     console.log(response.data);
  //     setMessages(response.data);
  //   })
  // },[])

  // useEffect(()=>{
  //   const pusher = new Pusher('d3b568c9f9ff1439a053', {
  //     cluster: 'eu'
  //   });

  //   const channel = pusher.subscribe('messages');
  //   channel.bind('inserted', (newMessage) => {
  //     //alert(JSON.stringify(newMessage));
  //     setMessages([...messages,newMessage]);
  //   });

  //   return ()=>{
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   }
  // },[messages]);
  // console.log(messages);
  return (
    <>
     <div className='app'>
        <Link to='/signUp'>hello</Link>
        <Routes>
          <Route exact path="/" component={<Login />} />
          <Route path="/signUp" component={<SignUp />} />
        </Routes>
      </div>
      {/* <BrowserRouter>
      
        <Routes>
          <Route exact path="/" component={<Login />} />
          <Route path="/signUp" component={<SignUp />} />
        </Routes>
      </BrowserRouter>  */}

    </>
  );
}
export default App;
