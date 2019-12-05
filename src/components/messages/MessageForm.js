import React, { Component } from 'react'
import MessagesManager from '../../modules/MessagesManager'

class MessageForm extends Component {
    state = {
        message: "",
        timeStamp: "",
        loadingStatus: false,
    }

    messageFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    addNewMessage = event => {
        event.preventDefault();
        if (this.state.message === "" || this.state.timeStamp === "") {
            window.alert("Don't be shy...say something!");
        } else {
            this.setState({ loadingStatus: true});
            const message = {
                message: this.state.message,
                timeStamp: this.state.timeStamp,
            };

            MessagesManager.post(message)
            .then(() => this.props.history.push("/messages"));
        }
    };

    render(){
        return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                    type="text"
                    required
                    onChange={this.messageFieldChange}
                    id="event"
                    placeholder="Event"
                    />
                    <label htmlFor="event">Message</label>
                    
                    <input
                    type="text"
                    required
                    onChange={this.messageFieldChange}
                    id="date"
                    placeholder="Date"
                    />
                    <label htmlFor="date">Time Stamp</label>
                </div>

                <div className="alignRight">
                    <button
                    type="button"
                    disabled={this.state.loadingStatus}
                    onClick={this.addNewMessage}
                    >Submit</button>
                </div>
            </fieldset>
        </form>
        </>
        )
    }
}

export default MessageForm