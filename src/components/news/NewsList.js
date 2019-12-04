import React, { Component } from 'react'
import NewsManager from '../../modules/NewsManager'

class NewsList extends Component {
    state = {
        news: []
    }

    componentDidMount() {
        const currentUser = localStorage.getItem("activeUser")
        NewsManager.getAll(currentUser)
            .then(news => {
                this.setState({
                    news: news
                })
            })

    }

    render() {
        return (
            <>
                <button
                    id="add-news-article-button"
                    className="button"
                    onClick={() => { this.history.push("/newsform") }}
                >
                    Add News Article
        </button>
            </>
        )
    }

}


export default NewsList