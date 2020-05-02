import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {



        let tasksElements = this.props.tasks.map( task => {
            return <TodoListTask
                task={task}
                changeStatus={this.props.changeStatus}  />;
        });



        return (
            <div className="todoList-tasks">
                { tasksElements }
            </div>
        );
    }
}

export default TodoListTasks;

