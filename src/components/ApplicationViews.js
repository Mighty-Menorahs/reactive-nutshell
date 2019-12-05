// Purpose: to invoke and run each Component

import { Route } from "react-router-dom";
import React, { Component } from "react";
import NewsList from "./news/NewsList"
import NewsForm from "./news/NewsForm"
import NewsEditForm from "./news/NewsEditForm"
import EventCard from "./events/EventCard";
import SignUp from "./auth/SignUp";
import EventList from "./events/EventList";
import EventDetail from "./events/EventDetail";
import EventEditForm from "./events/EventEditForm";
import EventForm from "./events/EventForm";
import MessageCard from "./messages/MessageCard";
import MessageList from "./messages/MessageList";
import MessageForm from "./messages/MessageForm";
import TaskList from "./tasks/TaskList"
import TaskForm from "./tasks/TaskForm"

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
            return <MessageCard {...props} />
            // Remove null and return the component which will show the messages
          }}
        />

        <Route exact path="/messages" render={props => {
          return <MessageList {...props}
          />
        }}
        />
        <Route path="/messagesform" render={props => {
          return <MessageForm {...props} />
        }}
        />

        <Route exact
          path="/tasks" render={props => {
            return <TaskList {...props} />
          }}
        />

        <Route
          path="/tasks/taskform" render={props => {
            return <TaskForm {...props} />
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

        <Route exact path="/news" render={props => {
          return <NewsList {...props}
          />
        }}
        />
        <Route path="/newsform" render={props => {
          return <NewsForm {...props} />
        }}
        />
        <Route path="/news/:newsId(\d+)/edit" render={props => {
          return <NewsEditForm {...props} />
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
