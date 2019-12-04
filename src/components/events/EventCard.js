import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

class EventCard extends Component {
    render() {
        return (
        <div className="card" class="border border-primary p-3 mb-2 bg-dark text-primary">
            <div className="card-content">
            <h1>Event: {this.props.event.event}</h1>
                <h3>Date: {this.props.event.date}</h3>
                <h3>Location: {this.props.event.location}</h3>
                <button class="text-primary bg-dark" type="button" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
                <button class="text-primary bg-dark" type="button" onClick={() => {this.props.history.push(`/events/${this.props.event.id}/edit`)}}>Edit</button>
                <Link to={`/events/${this.props.event.id}`}><button class="text-primary bg-dark">Detail View</button></Link>
            </div>
        </div>
        );
    }
}

export default EventCard;