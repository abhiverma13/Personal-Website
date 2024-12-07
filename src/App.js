import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import MyProjects from './MyProjects';
import Experience from './Experience';
import ContactMe from './ContactMe';
import NotFound from './NotFound';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects*">
              <MyProjects />
            </Route>
            <Route path="/experience*">
              <Experience />
            </Route>
            {/* <Route path="/contactme">
              <ContactMe />
            </Route> */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
