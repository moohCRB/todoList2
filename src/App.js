import React,{Component} from 'react';
import './App.css';

class App extends Component {
  state ={
    newTask : "",
    todos :[{text:'mohamed'},{text:'mohamed2'},{text:'mohamed3'}]
  }
  compliteTask = (index) =>{
    const todos = [...this.state.todos];
    todos.splice(index,1);
    this.setState({
      todos
    });
  }
  updateNewTask = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }
  addTask = () => {
    const todos = [...this.state.todos];
    todos.push({
      text: this.state.newTask
    });
    this.setState({
      todos
    });
  }
  
  render(){
    

    return (
      <div className="App">
        {this.state.todos.map((todo,index) => <li key={index}> {todo.text }
        <button onClick={()=>{this.compliteTask(index)}}>Done</button>
        </li>)}
        <input value = {this.state.newTask} onChange={this.updateNewTask}></input>
        <button onClick={this.addTask} >Add</button>
      </div>
    );
  }
}
export default App;
