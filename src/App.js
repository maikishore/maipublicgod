import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Test from "./test";



const styles = {
  container: {
    style: "btn btn-accent",
    document: "",
  },
};



function App() {
  const classes=styles

  return <div className="App">
<Router>
<Switch>
          <Route path="/test">
            <Test />
         </Route>
        </Switch>

</Router>



  </div>;
}

export default App;
