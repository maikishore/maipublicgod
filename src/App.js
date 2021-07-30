import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Test from "./test";
import Login from "./Pages/Auths/Login";
import SignUp from "./Pages/Auths/Signup";
import Reset from "./Pages/Auths/Reset";
import { AuthProvider } from "./GlobalContexts/authcontext";

function App() {
  return (
 
   
      <AuthProvider>
      <div className="App">
           
        <Router>
          <Switch>
            <Route path="/test">
              <Test />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/reset">
              <Reset />
            </Route>
          </Switch>
        </Router>
     
      </div>
      </AuthProvider>
  
  );
}

export default App;
