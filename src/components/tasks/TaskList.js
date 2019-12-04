import React, { Component } from 'react'
import TaskCard from './TaskCard'
import TasksManager from '../../modules/TasksManager'

class TaskList extends Component {

    state = {
        tasks: []
    }


    componentDidMount() {
        TasksManager.get
    }

    render() {
        return (
            <>
                <button type="button" onClick={() => { }}>Add New Task</button>
                <div className="container-cards">
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