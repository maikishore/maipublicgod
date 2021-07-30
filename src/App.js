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
            <Route exact path="/" component={<div>Welcome</div>} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/reset" component={Reset} />


            

      
          </Switch>
        </Router>
     
      </div>
      </AuthProvider>
  
  );
}

export default App;
