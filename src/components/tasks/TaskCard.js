import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class TaskCard extends Component {
    render() {
        return (
            <div className="card">
            <div className="card-content">
                <h3>Task: <span className="task-title">{this.props.task.name}</span></h3>
                <p>Expected Date of Completion: {this.props.task.date}</p>
               <button type="button" onClick={() => 
               this.props.deleteTask(this.props.task.id)}>Delete</button>
                </div>
                </div>
        )
    }

}