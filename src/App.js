import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contents from "./components/pages/Contents";
import Overview from "./components/pages/Overview";
import Module1 from "./components/pages/Module1";
import Module2 from "./components/pages/Module2";
import Module3 from "./components/pages/Module3";
import Module4 from "./components/pages/Module4";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contents" exact element={<Contents />} />
          <Route path="/overview" exact element={<Overview />} />
          <Route path="/module1" exact element={<Module1 />} />
          <Route path="/module2" exact element={<Module2 />} />
          <Route path="/module3" exact element={<Module3 />} />
          <Route path="/module4" exact element={<Module4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
