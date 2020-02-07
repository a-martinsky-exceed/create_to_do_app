import React from 'react';
import { SelectAllButton } from './components/SelectAllButton'
import { CreateToDo } from './components/CreateToDo'
import { ToDoList } from './components/ToDoList'
import './App.css';

class App extends React.Component {
  state = {
    visible: 'hidden',
    active: true,
    list: []
  }

  addItem = data => {
    const  nextItem  = [data, ...this.state.list];
    this.setState({ list: nextItem });
  };

  render() {
    const {visible, active, list} = this.state
    return(
      <div className = "container">
        <h1>todos</h1>
        <div id = "new">
          <SelectAllButton id = "SelectAll" visible = {visible} active = {active.toString()} />
          <CreateToDo addToDo = {this.addItem} />
          <ToDoList list = {this.state.list}/>
        </div>
      </div>
    )
  }
}

export default App;
