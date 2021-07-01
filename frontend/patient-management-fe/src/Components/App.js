import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar'
import ".././App.css"
import BottomNav from './BottomNav'
import Header from './Header';
import PatientList from './PatientList'
import AddPatient from './AddPatient'
import UpdatePatient from './UpdatePatient';
import{ BrowserRouter as Router, Route, Switch}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){

    return (
      <div>
        
        <Router>
        
        <Header />
        <div className="container">
          <Switch>
            
                      <Route path="/" exact component={PatientList} /> 
                      <Route path="/patients" component={PatientList} />
                      <Route path="/add"  component={AddPatient} />
                       <Route path="/updatepatient/:id"  component={UpdatePatient} />
                        <Route path="/search"  component={SearchBar} />
           </Switch>
           </div>
           <div className="container"> 
           
           </div>
          
        <BottomNav />
        </Router>
      </div>
    );
  
}




export default App;
