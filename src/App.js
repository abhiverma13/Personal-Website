import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import MyProjects from './MyProjects';
import Experience from './Experience';
import ContactMe from './ContactMe';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/myprojects">
              <Navbar />
              <MyProjects />
            </Route>
            <Route path="/experience">
              <Navbar />
              <Experience />
            </Route>
            <Route path="/contactme">
              <Navbar />
              <ContactMe />
            </Route>
            <Route path="*">
              <Navbar />
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
