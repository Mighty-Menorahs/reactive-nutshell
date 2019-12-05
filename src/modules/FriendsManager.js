const baseUrl = `http://localhost:5002`
export default {
    getAll(userId) {
        return fetch(`${baseUrl}/friends/${userId}/`)
        .then(data => data.json())
    },
    post(newFriend) {
        return fetch(`${baseUrl}/friends`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json" 
            },
            body: JSON.stringify(newFriend)
        }).then(friends => friends.json())
    },
    getUserByName() {
        return fetch(`${baseUrl}/users`)
    }
}