const baseUrl = "http://localhost:5002/"

export default {

getUserTasks(userId) {
    return fetch(`${baseUrl}tasks?userId=${userId}`)
    .then(data => data.json())
}

}