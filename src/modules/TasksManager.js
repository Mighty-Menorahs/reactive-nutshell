const baseUrl = "http://localhost:5002/"

export default {
    getUserTasks(userId) {
        return fetch(`${baseUrl}tasks?userId=${userId}`)
            .then(data => data.json())
    },

    post(task) {
        return fetch(`${baseUrl}tasks`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            }).then(data => data.json())
    }
}