import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import './App.css'; /* Global CSS */
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/project/1">
          <Project1 />
        </Route> */}
      </Switch>
    </Router>
  );
}
