const baseUrl = `http://5002`

export default {
    get(userId, newsId) {
        return fetch(`${baseUrl}/users/${userId}/?_embed=news/${newsId}`)
        .then(data => data.json())
    },
    getAll(userId) {
        return fetch(`${baseUrl}/users/${userId}/?_embed=news`)
        .then(data => data.json())
    },
    // http://localhost:5002/users/2/?_embed=news
}