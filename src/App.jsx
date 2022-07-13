import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Project1 from './views/ProjectDetails/Project1';
import Project2 from './views/ProjectDetails/Project2';
import Project3 from './views/ProjectDetails/Project3';
import './App.css'; /* Global CSS */
import ProjectSummary from './components/ProjectSummary/ProjectSummary';
import AboutMeView from './views/AboutMeView';
import Contact from './views/Contact/Contact';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutme">
          <AboutMeView />
        </Route>
        <Route exact path="/projects">
          <ProjectSummary />
        </Route>
        <Route exact path="/project1">
          <Project1 />
        </Route>
        <Route exact path="/project2">
          <Project2 />
        </Route>
        <Route exact path="/project3">
          <Project3 />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}
