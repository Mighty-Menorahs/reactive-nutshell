import React, { Component } from 'react'

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
    addFriend = () => {
        this.setState({
            showInputField: true,
        })

    }
    render() {
        return (
            <>
                <div>
                    <button
                        onClick={this.addFriend}
                    >Add New Friend</button>
                    <input 
                    id="userId"
                    hidden={! this.state.showInputField}
                    onChange={this.handleFieldChange}
                    />
                </div>
            </>
        )
    }
}

export default FriendsList