//import the components we will need
import React, { Component } from 'react'
import MessageCard from './MessageCard'
import MessagesManager from '../../modules/MessagesManager'


class MessageList extends Component {
    //define what this component needs to render
    state = {
        messages: [],
    }

    componentDidMount() {
        const currentUser = localStorage.getItem("activeUser")
        MessagesManager.getAll(currentUser)
            .then(messagesArray => {
                this.setState({
                    messages: messagesArray
                })
            })
    }

    deleteMessage = (id) => {
        const currentUser = localStorage.getItem("activeUser")
        MessagesManager.delete(id)
            .then(() => {
                MessagesManager.getAll(currentUser)
                .then(messagesArray => {
                    this.setState({
                        messages: messagesArray
                    })
                })
            })
    }

    render() {
        console.log(this.state)
        return (
            <>
                <section>
                    <button
                        id="add-new-message-button"
                        className="button"
                        onClick={() => { this.props.history.push("/messageform") }}>
                        Add Message
                    </button>
                </section>

                <div>
                    {this.state.messages.map(messageEntry =>
                        <MessageCard
                            key={messageEntry.id}
                            messageEntry={messageEntry}
                            deleteMessage={this.deleteMessage}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default MessageList;