import React from "react";
// import Clock from "./Clock.js";
// import Form from "./Form";
// import FormContainer from "../src/Components/Form/component/FormContainer";
import APIContainer from "./Components/API/component/APIContainer";
import Details from "./Components/API/component/Details";
import Nav from "./Components/API/component/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/apidata" component={APIContainer} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default App;
