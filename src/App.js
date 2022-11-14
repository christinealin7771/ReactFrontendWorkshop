import './App.css';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/User" element={<AboutMe />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

