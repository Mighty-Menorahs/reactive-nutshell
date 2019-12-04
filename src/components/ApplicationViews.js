import { Route } from "react-router-dom";
import React, { Component } from "react";
import NewsCard from "./news/NewsCard"
import NewsList from "./news/NewsList"
import NewsForm from "./news/NewsForm"
import EventCard from "./events/EventCard";
import SignUp from "./auth/SignUp";

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
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/events" render={props => {
            return <EventCard {...props} />
            // Remove null and return the component which will show the user's events
          }}
        />

        <Route
        path="/news" render={props => {
          return <NewsList {...props}
          />
        }}
        />
        <Route path="/newsform" render={props => {
          return <NewsForm {...props} />
        }}
        />
      </React.Fragment>
    );
  }
}
