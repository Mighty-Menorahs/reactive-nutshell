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

            </div>
        )
    }
}


export default NewsCard