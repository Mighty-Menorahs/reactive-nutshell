import React, { Component } from 'react'
import FriendsManager from "../../modules/FriendsManager"
import FriendCard from "./FriendCard"

class FriendsList extends Component {
    state = {
        friends: [],
        username: "",
        userId: "",
        loggedInUserId: "",
        showInputField: false
    }

    componentDidMount() {
        const currentUser = localStorage.getItem("activeUser")
        FriendsManager.getAll(currentUser)
            .then(friendsWithUsers => {
                console.log("raw data", friendsWithUsers)
                    this.setState({
                        friends: friendsWithUsers
                    })
            })
                
    }

    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    showField = () => {
        this.setState({
            showInputField: true,
        })
    }
    addNewFriend = (event) => {
        event.preventDefault()
        const currentUser = localStorage.getItem("activeUser")
        this.state.friends.map(friend =>
            {if (friend.user.username === this.state.username) {
                const newFriend = {
                    userId: Number(friend.userId),
                    loggedInUserId: Number(currentUser)
                }
                console.log("New friend", newFriend)
                // FriendsManager.post(newFriend)
                //     .then(friends => FriendsManager.getAll(currentUser))
            }
            })

            }

    

    render() {
        console.log("friends in state", this.state.friends)
        return (
            <>
                <div>
                    <button
                        onClick={this.showField}
                    >Add New Friend</button>
                    <input
                        id="username"
                        hidden={!this.state.showInputField}
                        onChange={this.handleFieldChange}
                    />
                    <button
                        hidden={!this.state.showInputField}
                        onClick={this.addNewFriend}
                    >Make A New Friend</button>
                </div>
                    {this.state.friends.map(friend =>
                    <FriendCard
                        key = {friend.id}
                        user = {friend}
                        { ...this.props }
                    /> 
                ) }}
            </>
        )
    }
}

export default FriendsList