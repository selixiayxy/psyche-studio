import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import WorkPage from './Pages/WorkPage';
import InfoPage from './Pages/InfoPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="app">
       <Header /> {/* Make sure Header is inside App */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;