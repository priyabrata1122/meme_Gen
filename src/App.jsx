import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="container">
      <h1>Meme Page</h1>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App
