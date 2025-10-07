import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import PageTitle from './components/PageTitle';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import AboutPage from './pages/About/About';
import Solution from './pages/solution/Solution';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <PageTitle title="Palm" />

                  <Home />
                </>
              }
            />
          </Route>
          <Route path="/about" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <PageTitle title="Palm" />

                  <AboutPage />
                </>
              }
            />
          </Route>
          <Route path="/solutions" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <PageTitle title="Palm" />

                  <Solution />
                </>
              }
            />
          </Route>
          <Route path="/contact" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <PageTitle title="Palm" />

                  <Contact />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
