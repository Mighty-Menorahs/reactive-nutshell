import React, { Component } from 'react'
import FriendsManager from "../../modules/FriendsManager"

class FriendsList extends Component {
    state = {
        userId: "",
        loggedInUserId: "",
        showInputField: false
    }

    componentDidMount() {

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
            const friend = {
                userId: this.state.userId,
                loggedInUserId: currentUser
            }
            FriendsManager.post(friend)
            .then(friends => FriendsManager.getAll(currentUser))
        }
    
    render() {
        return (
            <>
                <div>
                    <button
                        onClick={this.showField}
                    >Add New Friend</button>
                    <input
                        id="userId"
                        hidden={!this.state.showInputField}
                        onChange={this.handleFieldChange}
                    />
                    <button
                    hidden={!this.state.showInputField}
                        onClick={this.addNewFriend}
                    >Make A New Friend</button>
                </div>
            </>
        )
    }
}

export default FriendsList