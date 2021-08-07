import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Test from "./test";
import Login from "./Pages/Auths/Login";
import SignUp from "./Pages/Auths/Signup";
import Reset from "./Pages/Auths/Reset";
import { AuthProvider } from "./GlobalContexts/authcontext";
import PrivateRoute from "./Routes/PrivateRoute";
import Profile from "./Pages/Dashboard/profile";
import Cloze from "./Pages/Quiz/Cloze/Cloze";
import Quiz from "./Pages/Quiz/Quiz";
import QandA from "./Pages/Quiz/QnA/QnA";
import Mcq from "./Pages/Quiz/MCQ/mcq";
import TKS from "./tks";

function App() {
  return (
 
   
      <AuthProvider>
      <div className="App">
           
        <Router>
          <Switch>
            <Route exact path="/" component={<div>Welcome</div>} />
            <Route  path="/test" component={Test} />
            <Route  path="/signup" component={SignUp} />
            <Route  path="/login" component={Login} />
            <Route  path="/reset" component={Reset} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/quiz" component={Quiz} />

            <PrivateRoute path="/cloze" component={Cloze} />
            <PrivateRoute path="/qna" component={QandA} />
            <PrivateRoute path="/mcq" component={Mcq} />


      
          </Switch>
        </Router>
     
      </div>
      </AuthProvider>
  
  );
}

export default App;
