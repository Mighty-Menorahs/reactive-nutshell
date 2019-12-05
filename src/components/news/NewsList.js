import React, { Component } from 'react'
import NewsManager from '../../modules/NewsManager'
import NewsCard from './NewsCard'

class NewsList extends Component {
    state = {
        news: []
    }

    
    componentDidMount() {
        NewsManager.getAll()
        .then(news => {
            console.log("news", news)
                this.setState({
                    news: news
                })
            })
    }

    deleteNewsArticle = (id) => {
        NewsManager.delete(id)
        .then(() => {
            NewsManager.getAll()
            .then(news => {
                this.setState({
                    news: news
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