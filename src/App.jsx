import './App.css'; /* Global CSS */
import NavBar from './components/NavBar/NavBar';
import AboutMe from './views/AboutMe/AboutMe';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';
import Landing from './views/Landing/Landing';

export default function App() {
  return (
    <>
      <NavBar />
      <div className="bg-lighterretro bg-cover bg-repeat-none main-container snap-mandatory snap-y h-full w-full">
        <Landing />
        {/* add browser router and fuller about me page later */}
        <Projects />
        <Contact />
      </div>
    </>
  );
}
