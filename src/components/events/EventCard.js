import React, { Component } from 'react';

class EventCard extends Component {
    render() {
        return (
        <div className="card">
            <div className="card-content">
                <h1>Event</h1>
                <h3>Date</h3>
                <h3>Location</h3>
                <button type="button">Delete</button>
                <button type="button">Edit</button>
            </div>
        </div>
        );
    }
}

export default EventCard;