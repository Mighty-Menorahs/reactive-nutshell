import { Route } from "react-router-dom";
import React, { Component } from "react";
import SignUp from "./auth/SignUp";
import EventList from "./events/EventList";
import EventDetail from "./events/EventDetail";
import EventEditForm from "./events/EventEditForm";
import EventForm from "./events/EventForm";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          exact path="/signup" render={props => {
            return <SignUp {...props} />
            // Remove null and return the component which will handle user registration
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return 
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return <TaskList {...props} />
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route exact
          path="/events" render={props => {
            return <EventList {...props} />
            // Remove null and return the component which will show the user's events
          }}
        />
        
        <Route exact path="/events/:eventId(\d+)" render={props => {
          return <EventDetail eventId={parseInt(props.match.params.eventId)}
        {...props}
        />
        }} />
        
        <Route exact path="/events/:eventId(\d+)/edit" render={props => {
          return <EventEditForm {...props} />
        }}
        />

        <Route path="/events/new" render={(props) => {
          return <EventForm {...props} />
        }}
        />
      </React.Fragment>
    );
  }
}
