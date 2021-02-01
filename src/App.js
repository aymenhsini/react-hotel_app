import "./App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import WithError from "./Pages/WithError";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />{" "}
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={WithError} />
      </Switch>
    </>
  );
}

export default App;
