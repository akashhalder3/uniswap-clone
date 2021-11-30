import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Pool from './components/Pool/Pool';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      {/* <Home></Home> */}
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pool" element={<Pool />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
