import logo from './logo.svg';
import './App.css';
import Home from './components/Body';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Slideshow from './pages/Slideshow/Slideshow';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/slideshow' component={Slideshow} />
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
    </Router>
  );
}

export default App;
