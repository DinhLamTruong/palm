// import { useState } from 'react'
import './App.css';
import Layout from './components/layout/Layout';
import Solution from './pages/solotion/Solution';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <Layout>
        <Solution />
        {/* <Contact /> */}
      </Layout>
    </>
  );
}

export default App;
