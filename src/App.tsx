import "./styles.css";

import ImagesComponent from "./components/images/index.js";

import SearchComponent from "./pages/search/index.js";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <h1>Homepage</h1>
          <SearchComponent />
        </Route>
        <Route path="/trending">
          <h1>Trending</h1>
          <ImagesComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
