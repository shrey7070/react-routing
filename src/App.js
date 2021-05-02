import "./App.css";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { createBrowserHistory } from "history";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path={ROUTES.home} exact component={Home} />
          <Route path={ROUTES.about} component={About} />
          <Route path={ROUTES.home} component={Dashboard} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
