import logo from './logo.svg';
import './App.css';
import Project from "./pages/project"
import Contact from "./pages/contact"
import Skills from "./pages/skills"
import About from "./pages/about"
import {BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
   <Router>
      <Route exact path="/" component={About} />
   </Router>
  );
}

export default App;
