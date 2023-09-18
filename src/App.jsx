import React from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Portfolio from './pages/portfolioPage/Portfolio';
import AboutPage from './pages/aboutPage/AboutPage';
import Skill from './pages/skillPage/Skill';
import ContactPage from './pages/contact/ContactPage';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Portfolio/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/skill" element={<Skill/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;