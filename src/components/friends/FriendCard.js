import React, { Component } from 'react'

class FriendCard extends Component {
    

    render() {
        return(
            <>
            <h3>{this.props.friend.username}</h3>
            </>
        )
    }
}





export default FriendCard