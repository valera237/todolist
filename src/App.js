import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";



class App extends React.Component {

    state = {
        tasks:  [
            { title: "CSS", isDone: true, priority: "low" },
            { title: "HTML", isDone: true, priority: "low" },
            { title: "REACT", isDone: false, priority: "high" },
            { title: "Angular", isDone: false, priority: "middle" },

        ],
        filterValue: "All"
    };


        changeFilter = (newFilterValue) => {
            this.setState( {
                filterValue: newFilterValue
            });


        }

        addTask = (newText) => {
        /*let newText = this.newTaskTitleRef.current.value;*/
        /*this.newTaskTitleRef.current.value = "";*/

        let newTask = {
            title: newText,
            isDone: false,
            priority: "low"
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
       }

       changeStatus = (status, task) => {

           let tasksCopy = this.state.tasks.map ( t => {
               if (t == task) {
                   return { ...t, isDone: status };
               }
               return t;

           });

           this.setState( {
               tasks: tasksCopy
               });


       }


    render = () => {

        return (


            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask} />

                 {/*   <div className="todoList-header">

                            <h3 className="todoList-header__title">What to Learn</h3>
                            <div className="todoList-newTaskForm">
                                <input type="text" placeholder="New task name" ref={this.newTaskTitleRef}  />
                                <button onClick={this.onAddTaskClick}>Add</button>
                            </div>

                    </div>*/}

                    <TodoListTasks
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter( (t) => {
                        switch (this.state.filterValue) {
                            case "All": return true;
                            case "Completed": return t.isDone;
                            case "Active": return !t.isDone;
                            default: return true;
                        }
                    } )   } />
                    <TodoListFooter changeFilter={ this.changeFilter } filterValue={this.state.filterValue}   />
                </div>
            </div>
        );
    }
}

export default App;

