import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Project1 from './views/ProjectDetails/Project1';
import Project2 from './views/ProjectDetails/Project2';
import Project3 from './views/ProjectDetails/Project3';
import './App.css'; /* Global CSS */
import ProjectSummary from './components/ProjectSummary/ProjectSummary';
import AboutMeView from './views/AboutMeView';
import Contact from './views/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';

export default function App() {
  // const images = imageData.map((image, index) => )
  return (
    <>
      <NavBar />
      <div className="main-container">
        <div className="scroll-container">
          <div className="content">
            <div className="gallery">
              <div className="directions">Scroll for more</div>
              <div className="background-text fill">
                Mira Kinebuchi Software Engineer
              </div>
              <div className="background-text outline">
                Mira Kinebuchi Software Engineer
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route exact path="/aboutme">
    //       <AboutMeView />
    //     </Route>
    //     <Route exact path="/projects">
    //       <ProjectSummary />
    //     </Route>
    //     <Route exact path="/project1">
    //       <Project1 />
    //     </Route>
    //     <Route exact path="/project2">
    //       <Project2 />
    //     </Route>
    //     <Route exact path="/project3">
    //       <Project3 />
    //     </Route>
    //     <Route exact path="/contact">
    //       <Contact />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}
