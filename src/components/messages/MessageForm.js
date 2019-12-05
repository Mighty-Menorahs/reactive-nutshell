import React, { Component } from 'react'
import MessagesManager from '../../modules/MessagesManager'

class MessageForm extends Component {
    state = {
        message: "",
        timeStamp: "",
        loadingStatus: false,
    }

    messageFieldChange = event => {
        console.log(this.state)
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    addNewMessage = event => {
        event.preventDefault();
        if (this.state.message === "") {
            window.alert("Don't be shy...say something!");
        } else {
            this.setState({ loadingStatus: true });
            const message = {
                message: this.state.message,
                timeStamp: new Date(),
                userId: Number(localStorage.getItem("activeUser"))
            };

            MessagesManager.post(message)
                .then(() => this.props.history.push("/messages"));
        }
    };

    render() {
        return (
            <>
                <h3>Add New Message</h3>
                <form>
                    <fieldset>
                        <div className="messageformbox">
                            <label htmlFor="new-message">Whatcha thinkin about?</label>
                            <textarea
                                rows="5"
                                cols="75"
                                required
                                onChange={this.messageFieldChange}
                                id="messageform"
                                placeholder="Add text here..."
                            />
                        </div>



                        <div className="formButton">
                            <button
                                type="button"
                                id="addmessage"
                                disabled={this.state.loadingStatus}
                                onClick={this.addNewMessage}
                            >
                                Add Message
                            </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default MessageForm