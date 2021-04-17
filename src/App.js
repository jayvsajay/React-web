import React from 'react';
//import { BounceLoader,BarLoader,BeatLoader } from 'react-spinners';
import Layout from './components/Layout/Layout';
import './App.css';
//import ThemeSwitcher from "react-theme-switcher";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';


function App() {
  
    return (
      <Router>
        
      <div className="App">


       <Switch>
       <React-Fragment>
        
        
         <Route path='/'  component={Layout} exact>
           
         </Route>
         
         <Route  path='/Signup' component={Signup} exact></Route>
    
         <Route path='/Login' component={Login} exact></Route>
        
         
         </React-Fragment>
       </Switch>
       
      </div>
    
      </Router>
    );
  }

    
  


export default App;
