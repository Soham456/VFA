
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Navi from './components/Navi'
import Home from './Home/Home';
import Work from './Work/Work';
import About from './About/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Footer from './components/Footer';



function App() {
  return (
    <Router>
    <div className="App">
      
      <Navi />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
