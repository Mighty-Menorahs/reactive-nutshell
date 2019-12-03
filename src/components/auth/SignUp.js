import React, { Component } from "react";

class SignUp extends Component {
    // Setting State to empty strings
    state = {
        email: "",
        username: "",
        password: ""
    }

    // Update State as the Registration Input Field is Utilized
    signUpFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    // Sign Up function and stop of click before ready
    handleSignUpSubmit = (event) => {
        event.preventDefault()
        // Storing The email and password and Username in local storage for customer.
    localStorage.setItem(
        "credentials",
        JSON.stringify({
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        })
    )
    this.props.history.push("/users");
    }
    render() {
        return (
         <>
            <form>
            <fieldset>
            <div className="formgrid">
                <label htmlFor="inputEmail">Email Address</label>
            <input onChange={this.signUpFieldChange} type="email"
                    id="email"
                    placeholder="Email Address"
                    required="" autoFocus="" />
                    
                <label htmlFor="inputUsername">Username</label>
            <input onChange={this.signUpFieldChange} 
            type="username"
                    id="username"
                    placeholder="Username"
                    required="" autoFocus="" />
                    
                <label htmlFor="inputPassword">Password</label>
            <input onChange={this.signUpFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" autoFocus="" />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            required autoFocus="" />
                </div>
                <button id="register-button" className="button" type="button">Submit</button>
            </fieldset>
        </form>
        </>
            
     )
    }
}


export default SignUp;