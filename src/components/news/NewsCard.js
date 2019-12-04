import React, { Component } from 'react'
import "./NewsCard.css"

class NewsCard extends Component {



    render() {
        return (
            <div className="card">
                <ul>
                    <li className="title">{this.props.newsItem.title}</li>
                    <li>{this.props.newsItem.synopsis}</li>
                    <li>{this.props.newsItem.url}</li>
                </ul>
                <div>
                <button
                    className="button"
                    id={`news-edit-button--${this.props.newsItem.id}`}
                    onClick={() => this.props.history.push(`/news/${this.props.newsItem.id}/edit`)}
                >Edit</button>
                <button
                    className="button"
                    id={`news-delete-button--${this.props.newsItem.id}`}
                    onClick={() => this.props.deleteNewsArticle(this.props.newsItem.id)}
                >Delete</button>
                </div>

            </div>
        )
    }
}


export default NewsCard