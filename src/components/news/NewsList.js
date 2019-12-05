import React, { Component } from 'react'
import NewsManager from '../../modules/NewsManager'
import NewsCard from './NewsCard'

class NewsList extends Component {
    state = {
        news: []
    }

    
    componentDidMount() {
        const currentUser = localStorage.getItem("activeUser")
        NewsManager.getAll(currentUser)
        .then(data => {
            console.log("data", data)
                this.setState({
                    news: data.news
                })
            })
    }

    deleteNewsArticle = (id) => {
        const currentUser = localStorage.getItem("activeUser")
        NewsManager.delete(id)
        .then(() => {
            NewsManager.getAll(currentUser)
            .then(data => {
                this.setState({
                    news: data.news
                })
            })
        })
    }

    render() {
        console.log(this.state.news)
        return (
            <>  
            <section>
                <button
                    id="add-news-article-button"
                    className="button"
                    onClick={() => { this.props.history.push("/newsform") }}
                >
                    Add News Article
        </button>
            </section>
         
                <div className="container-cards">
                    {this.state.news.map(newsItem => 
                        <NewsCard
                            key={newsItem.id}
                            newsItem={newsItem}
                            deleteNewsArticle={this.deleteNewsArticle}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }

}


export default NewsList