import React, { Component } from 'react'


class MessageCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    
                    <h6>Time Stamp:</h6>
        <p>{this.props.messageEntry.user.username}{this.props.messageEntry.message}</p>
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                </div>
            </div>
        )
    }
}

export default MessageCard