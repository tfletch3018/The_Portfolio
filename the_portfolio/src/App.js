import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
<div>
  <Navbar />
  <Route exact path="/" component={Home} />
  <Route exact path="/home" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="projects" component={Projects} />
  <Footer />
  </div>

      </Router>
  );
}

export default App;

