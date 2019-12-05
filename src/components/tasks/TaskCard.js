import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class TaskCard extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-content">

                        <input type="checkbox" name="checkbox"></input>
                            <label htmlFor="checkbox">Done!</label>

                        <h3>Task:

     {/* onClick={() => }> */}
                            {this.props.task.task}</h3>

                        <p>Expected Date of Completion: {this.props.task.date}</p>

                        <button type="button" onClick={() =>
                            this.props.deleteTask(this.props.task.id)}>Delete</button>
                    </div>
                </div>
            </>
        )
    }

}