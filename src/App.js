import  { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
import useToken from './components/useToken';
import ProtectedPage from './components/Protected';
import './App.css';
import { useState } from 'react';

function App() {
  const { token, setToken } = useToken();
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setToken={setToken}/>} />
          <Route path="/protected" element={<ProtectedPage />} />
       </Routes>
    </div>
  );
}

export default App;
