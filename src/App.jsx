import './App.css'; /* Global CSS */
import NavBar from './components/NavBar/NavBar';
import AboutMe from './views/AboutMe/AboutMe';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';
import Landing from './views/Landing/Landing';
import ContactForm from './components/ContactForm/ContactForm';

export default function App() {
  return (
    <>
      <NavBar />
      <div className="bg-tempsky snap-mandatory snap-y">
        <Landing />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
