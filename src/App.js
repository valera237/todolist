import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";



class App extends React.Component {

    newTaskTitleRef = React.createRef();
    state = {
        tasks:  [
            { title: "CSS", isDone: true, priority: "low" },
            { title: "HTML", isDone: true, priority: "low" },
            { title: "REACT", isDone: false, priority: "high" },
            { title: "Angular", isDone: false, priority: "middle" },

        ],
        filterValue: "All"
    };
        onAddTaskClick = () => {

            let newText = this.newTaskTitleRef.current.value;


                let newTask = {
                    title: newText,
                    isDone: false,
                    priority: "low"

                };
                let newTasks = [...this.state.tasks, newTask];

                this.setState({
                    tasks: newTasks
                });
            this.newTaskTitleRef.current.value = "";



        }



    render = () => {

        return (


            <div className="App">
                <div className="todoList">

                    <div className="">
                        <div className="todoList-header">
                            <h3 className="todoList-header__title">What to Learn</h3>
                            <div className="todoList-newTaskForm">
                                <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>
                                <button onClick={  this.onAddTaskClick  } >Add</button>
                            </div>
                        </div>
                    </div>

                    <TodoListTasks tasks={this.state.tasks} />
                    <TodoListFooter filterValue={this.state.filterValue}   />
                </div>
            </div>
        );
    }
}

export default App;

