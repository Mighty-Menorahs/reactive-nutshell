import React, { Component } from 'react'


class MessageCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                <ul>
                    
                    <li>{this.props.messageEntry.message}</li>
                    <li>{this.props.messageEntry.timeStamp}</li>
                </ul>
                </div>
                <div>
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                </div>
            </div>
        )
    }
}

export default MessageCard