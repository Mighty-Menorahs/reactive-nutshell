import React, { Component } from 'react'
import { Link } from "react-router-dom"
import TaskCard from './TaskCard'
import TasksManager from '../../modules/TasksManager'
import API from '../../modules/TasksManager'

export default class TaskList extends Component {

    state = {
        tasks: []
    }

    componentDidMount() {
        const userId = localStorage.getItem("activeUser")
        TasksManager.getUserTasks(userId)
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

                <div className="container-cards">
                <h2>My To Do List</h2>
                <Link to={`tasks/taskform`}><button type="button">Add New Task</button></Link>

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