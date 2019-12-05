import React, { Component } from "react"
import API from '../../modules/TasksManager'

class TaskEdit extends Component {
    state = {
        task: "",
        date: "",
        loadingStatus: false,

    }
    componentDidMount() {
        API.
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="task">Task:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="task"
                                value={this.state.task}
                            />
                        </div>
                    </fieldset>
                </form>
            </>
        )

    }
}