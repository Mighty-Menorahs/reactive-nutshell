import React, { Component } from 'react'


class NewsForm extends Component {
    state = {
        title: "",
        synopsis: "",
        url: "",
        timestamp: ""
    }
handleFieldChange(event) {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
}
createNewsObject(event) {
    if (this.state.title === "" || this.state.synopsis === "" || this.state.url === "") {
        alert("Please fill out all fields before hitting 'submit'")
    } else {
        event.preventDefault()
        const news = {
            title: this.state.title,
            synopsis: this.state.synopsis,
            url: this.state.url,
            timestamp: new Date(),
            userId: localStorage.getItem("activeUser")
        }
    }
}




}

export default NewsForm