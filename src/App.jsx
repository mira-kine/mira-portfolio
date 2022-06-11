import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home'
import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
