import React, { Component } from 'react'
import "./NewsForms.css"

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
        event.preventDefault()
        if (this.state.title === "" || this.state.synopsis === "" || this.state.url === "") {
            alert("Please fill out all fields before hitting 'submit'")
        } else {
            
            const news = {
                title: this.state.title,
                synopsis: this.state.synopsis,
                url: this.state.url,
                timestamp: new Date(),
                userId: localStorage.getItem("activeUser")
            }
        }
    }

    render() {
        console.log(this.state)
        return (
            <>
            <h2>Add a News Article</h2>
                <form>
                    <fieldset>
                        <div className="form">
                            <label
                                htmlFor="title"
                            >Title
                    </label>
                            <input
                                id="title"
                                type="text"
                                onChange={this.handleFieldChange}
                            />
                            <label
                                htmlFor="synopsis"
                            >Synopsis
                    </label>
                            <input
                                id="synopsis"
                                type="text"
                                onChange={this.handleFieldChange}
                            />
                            <label
                            htmlFor="url"
                            >
                                URL
                            </label>
                            <input
                                id="url"
                                type="text"
                                onChange={this.handleFieldChange}
                            />
                        </div>
                        <div className="formButton">
                            <button
                            className="button"
                            id="news-article-button"
                            onClick={this.createNewsObject}
                            >
                                Save News Article
                            </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }


}

export default NewsForm