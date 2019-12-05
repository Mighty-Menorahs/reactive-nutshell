import React, { Component } from 'react'


class MessageCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h1>Messages</h1>
                    <h6>Time Stamp:</h6>
                    <textarea placeholder="Enter your message..."></textarea>
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                    <button type="button">Detail View</button>
                </div>
            </div>
        )
    }
}

export default MessageCard