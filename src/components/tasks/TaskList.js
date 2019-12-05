import React, { Component } from 'react'
import TaskCard from './TaskCard'
import API from '../../modules/TasksManager'

export default class TaskList extends Component {

    state = {
        tasks: []
    }


    componentDidMount() {
        const appUserId = localStorage.getItem("activeUser")
        console.log(appUserId)
        API.getUserTasks(appUserId)
        .then((taskArray) => {
            console.log(taskArray)
            this.setState({
                tasks: taskArray
            })
        })
    }

    render() {
        console.log(this.state.tasks)
        return (
            <>
                <button type="button" 
                // onClick={() => { }}
                >Add New Task</button>
                <div className="container-cards">
                    <h2>My To Do List</h2>
                    {this.state.tasks.map(task =>
                        <TaskCard
                            key={task.id}
                            task={task}
                            //is "this.deleteTask in brackets because it's JS? But isn't the above task in curly brackets because it's an object?"
                            deleteTask={this.deleteTask}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}