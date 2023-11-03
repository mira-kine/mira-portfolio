import './App.css'; /* Global CSS */
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
