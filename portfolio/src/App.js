import {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Project from "./components/Project.js"
import Jumbo from "./components/About.js";
import NavHeader from "./components/Header.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
  return (
    <Router>
      <div>
        <NavHeader />
        <div>
          <Route exact path = "/">
            <Jumbo />
          </Route>
          <Route exact path = "/portfolio">
            <Project />
          </Route>
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
