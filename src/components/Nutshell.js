import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";

class Nutshell extends Component {
//   state ={
//     user: false
// }

// // Check Local Storage for matching Credentials
// // returns boolean value
// // moving Authentication to Nutshell.js from App.View
// isSignedup = () => localStorage.getItem("credentials") !== null

// setUser = (regObj) => {
//   // Set Store Email and password in local storage
//   sessionStorage.setItem(
//     "credentials",
//     JSON.stringify(regObj)
//   )
//   this.setState({
//     user: this.isAuthenticated()
//   });
// }

componentDidMount(){
  // this.setState({
  //   user: this.isAuthenticated()
  // })
  localStorage.setItem("activeUser", 1)
}

render() {
    return (
      <React.Fragment>
        <NavBar 
        // user={this.state.user} 
        />
        <ApplicationViews 
        // user={this.state.user}
        //                   setUser={this.setUser} 
                          />
      </React.Fragment>
    );
  }
}

export default Nutshell;
