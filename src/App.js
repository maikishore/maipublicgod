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
import QnA from "./Pages/Quiz/QnA/QnA";
import Mcq from "./Pages/Quiz/MCQ/mcq";
import TKS from "./tks";
import Editors from "./Pages/Editor/editors";
import VideoNote from "./Pages/Video/videonote";
import Graph from "./Pages/Graph/graph";
import MainLibrary from "./Pages/Main/mainlibrary";
import ReadEditor from "./Pages/Editor/readeditor";
import ReadVideoNote from "./Pages/Video/readvideo";
import LoadingDiv from "./Commons/LoadingDiv";



function App() {
  return (
    <AuthProvider>
      <div className="App ">
        <Router>
          <Switch>
            <Route exact path="/" component={<div>Welcome</div>} />
            <Route path="/test" component={Test} />
            <Route path="/tks" component={TKS} />

            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/reset" component={Reset} />

            <Route path="/note/:id" component={Editors} />
            <Route path="/readnote/:id" component={ReadEditor} />
            <Route path="/readvideonote/:id" component={ReadVideoNote} />
            <Route path="/videonote/:id" component={VideoNote} />
     
            <PrivateRoute path="/profile" component={Profile} />

            <PrivateRoute path="/quiz/:id" component={Quiz} />

            <PrivateRoute path="/cloze/:id" component={Cloze} />
            <PrivateRoute path="/qna/:id" component={QnA} />
            <PrivateRoute path="/mcq" component={Mcq} />

            <PrivateRoute path="/kgraph" component={Graph} />
            <PrivateRoute path="/library" component={MainLibrary} />

            <PrivateRoute path="/loading" component={LoadingDiv} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
