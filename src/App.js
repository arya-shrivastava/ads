import React from "react";
import StudentList from "./Components/StudentAPI/component/StudentList";
import AddStudent from "./Components/StudentAPI/component/AddStudent";
import { StudentProvider } from "./Components/StudentAPI/component/StudentContext";
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
          <StudentProvider>
            <AddStudent />
            <Route path="/studentapi" component={StudentList} />
          </StudentProvider>
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
