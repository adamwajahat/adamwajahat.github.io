import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Helmet } from 'react-helmet';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WorkAll from './pages/WorkAll';
import WorkDisplay from './pages/WorkDisplay';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8'/>
        <title>Adam Wajahat</title>
        <link rel='canonical' href='https://adamwajahat.github.io/' />
        <meta name='description' content='Now live!'/>
      </Helmet>
      <Router>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/all" element={<WorkAll />} />
              <Route path="/work/:id" element={<WorkDisplay />} />
              <Route path="/about" element={<About />} />
          </Routes>
        <Footer></Footer>
      </Router></div>
  );
}

export default App;
