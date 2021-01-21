import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Project from "./components/Project.js";
import Footer from "./components/Footer.js";
import Jumbo from "./components/Jumbo.js";
import About from "./components/About.js";
import NavHeader from "./components/Header.js";
import "./App.css";

const portfolio = [
  {
    id: 1,
    projectImage: process.env.PUBLIC_URL + "/Assets/Beercrawlr.png",
    projectName: "BeerCrawlr",
    projectDescription:
      "Team based project focusing on front end design and basic API calls",
    projectUrl: "https://joeybrown-ctrl.github.io/Beercrawlr/",
  },
  {
    id: 2,
    projectName: "Work Day Scheduler",
    projectImage: process.env.PUBLIC_URL +"/Assets/WorkScheduler.png",
    projectDescription:
      "Web app that utilizes local storage to write and rewrite items to a calendar",
    projectUrl: "https://chrisfalk88.github.io/work_day_scheduler/",
  },
  {
    id: 3,
    projectName: "Weather Dashboard",
    projectImage: process.env.PUBLIC_URL +"/Assets/WeatherDashboard.png",
    projectDescription:
      "a weather dashboard that accepts a string and then uses the open weather API to capture the data and AJAX to write the data to the page.",
    projectUrl: "https://chrisfalk88.github.io/weather_dashboard/",
  },
  {
    id: 4,
    projectName: "Employee Tracking System",
    projectImage: process.env.PUBLIC_URL +"/Assets/EmployeeTrack.png",
    projectDescription:
      "Project that focuses on React and passing  items through props to rewrite items to the page",
    projectUrl: "https://chrisfalk88.github.io/Employee_directory/",
  },
  {
    id: 5,
    projectName: "Budget Tracker",
    projectImage: process.env.PUBLIC_URL +"/Assets/budgettracker.png",
    projectDescription:
      "Budget tracker is an app that lets you input transactions and assign them as either depits or credits. it then charts out your remaining spending left in a chart. Budget tracker can also cache inputs when no network is present and then upload the changes once internet connection is restored",
    projectUrl: "https://obscure-garden-47740.herokuapp.com/",
  },
  {
    id: 6,
    projectName: "Workout Tracker",
    projectImage: process.env.PUBLIC_URL + "/Assets/fittness.png",
    projectDescription:
      "Workout Tracker is a web based application where you can input your workouts, either cardio or resistance, and track your progress. You can create a workout and continually add to existing workouts as many as youd like or, once a workout is completed, start a new record",
    projectUrl: "https://dry-oasis-00198.herokuapp.com/",
  },
];
class App extends Component {
  render() {
    return (
      <Router>
        <NavHeader />
        <Container>
          <Route  exact path= "/">
            <Jumbo />
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Row>
              {portfolio.map((card) => (
                <Project key={card.id} {...card} />
              ))}
            </Row>
          </Route>
        </Container>
        <Footer />
      </Router>
    );
  }
}

export default App;
