import './App.css';
import MainNav from '../src/components/MainNav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Importer from './pages/Importer';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Router>
          <MainNav></MainNav>
          <Switch>
            <Route path="/importer">
              <Importer></Importer>
            </Route>
            <Route path="/collection">
              <h1>Collection</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
