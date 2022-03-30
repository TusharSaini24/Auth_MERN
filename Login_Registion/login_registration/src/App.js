import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Update from './components/update/update';
import Otpverify from './components/otpverify/otpverify';


function App() {

  const [ user, setLoginUser] = useState({
    name:"",
    email:"",
    password:""
  })

 


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
               user&& user._id? <Homepage/> : <Login setLoginUser={setLoginUser} />
            }
             </Route>
          <Route path="/login"> 
           <Login setLoginUser={setLoginUser} />
           </Route>
          <Route path="/register">  <Register/>  </Route>
          <Route path="/update">  <Update/>  </Route>
          <Route path="/otpverify"> 
                <Otpverify />
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;