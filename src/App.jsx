// import { useState } from 'react'
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
     <Layout>
  <Router>  
    <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
</Layout>
    </>
  );
}

export default App;
