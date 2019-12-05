import React, { Component } from 'react'
    //import the components we will need
    import MessageCard from './MessageCard'
    import MessagesManager from '../../modules/MessagesManager'
    

    class MessageList extends Component {
        //define what this component needs to render
        state = {
            messages: [],
        }

    componentDidMount(){
        console.log("Message LIST: ComponentDidMount");
        //getAll from MessagesManager and hang on to that data; put it in state
        MessagesManager.getAll()
        .then((messagesArray) => {
            this.setState({
                messages: messagesArray
            })
        })
    }
    
    deleteMessage = id => {
      MessagesManager.delete(id)
      .then(() => {
        MessagesManager.getAll()
        .then((newmessages) => {
          this.setState({
              messages: newmessages
          })
        })
      })
    }

    render() {
        console.log("MessagesList: Render");
      
        return(
          <React.Fragment>
            <section className="section-content">
              <button type="button" className="btn"
              onClick={() => {this.props.history.push("/messages/new")}}>
              New Message
          </button>
            </section>
          <div className="container-cards">
            {this.state.messages.map((message) =>
              <MessageCard 
              key={message.id} 
              message={message} 
              deleteMessage={this.deleteMessage}
              {...this.props}
              />
              )}
          </div>
        </React.Fragment>
        )
      }
    }

export default MessageList;