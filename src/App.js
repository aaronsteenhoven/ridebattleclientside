import React, {Component} from 'react';
// import Header from './Home/Header';
import Auth from './Auth/Auth';
// import Landing from './Home/Landing';
import SiteBar from './Home/SiteBar';
import Main from './Home/Main';
// import Footer from './Home/Footer';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {
  Route,
  Switch
} from 'react-router-dom';



class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

  viewConductor = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route>
            <Main sessionToken={this.state.sessionToken} />
          </Route>
        </Switch>
      )
    } else {
      return (
      <Route>
        <Auth setToken = {this.setSessionState}/>
      </Route>
      )
    }  
  }

   

    setSessionState = (token) => {
      localStorage.setItem('token', token);
      this.setState({
        sessionToken: token
      });
    }

    logout = () => {
      this.setState({
        sessionToken: ''
      })
      localStorage.clear();
      alert("You have been logged out")

    }



    render() {
      return (
        <div>
        <Router>
          <div> 
            {/* <SiteBar logout={this.logout} /> */}
            {this.viewConductor()}
          </div>
        </Router>
        </div>
      );
    }
  }


  export default App;