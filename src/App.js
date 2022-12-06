import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Browse from "./pages/Browse";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Streams from "./pages/Streams";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/details" element={<Details />} />
          <Route path="/streams" element={<Streams />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
