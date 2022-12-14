import './App.css'; /* Global CSS */
import NavBar from './components/NavBar/NavBar';
import AboutMe from './views/AboutMe/AboutMe';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';
import Landing from './views/Landing/Landing';

export default function App() {
  // const images = imageData.map((image, index) => )
  return (
    <>
      <div className="main-container">
        <NavBar />
        <div className="scroll-container">
          <div className="content">
            <div className="gallery snap-mandatory snap-y">
              <Landing />
              <AboutMe />
              <Projects />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
