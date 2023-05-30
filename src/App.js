import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contents from './components/pages/Contents';
import Overview from './components/pages/Overview';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contents' exact element={<Contents />} />
          <Route path='/overview' exact element={<Overview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
