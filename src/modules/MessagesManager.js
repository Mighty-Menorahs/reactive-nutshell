// Purpose: to host all API fetch calls

const baseURL = "http://localhost:5002"

export default {

    /************************************************
    Fetch all messages currently in database.json
    *************************************************/
    getAll() {
        return fetch(`${baseURL}/messages/`)
            .then(result => result.json())
    },

    /************************************************
     Fetch a single message from database.json 
     ************************************************/
    get(id) {
        return fetch(`${baseURL}/messages/${id}`)
            .then(result => result.json())
    },

    /***********************************************
     Fetch a single message and DELETE it
     ***********************************************/
    delete(id) {
        return fetch(`${baseURL}/messages/${id}`, {
            method: "DELETE"
        })
    },

    /************************************************
     POST a new message entry to the database.json
     ************************************************/
    post(newEvent) {
        return fetch(`${baseURL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    })
        .then(result => result.json())
    },

    /**********************************************************
     Fetch a single message entry, edit it, and UPDATE the post
     **********************************************************/
    update(editedMessage) {
        return fetch(`${baseURL}/messages/${editedMessage.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedMessage)
        })
        .then(result => result.json())
      }
    }