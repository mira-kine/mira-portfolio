import './App.css'; /* Global CSS */
import NavBar from './components/NavBar/NavBar';
import AboutMe from './views/AboutMe/AboutMe';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';
import Landing from './views/Landing/Landing';

export default function App() {
  return (
    <>
      <div className="bg-tempsky bg-cover main-container snap-mandatory snap-y h-full w-full">
        <NavBar />
        <Landing />
        {/* add browser router and fuller about me page later */}
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
