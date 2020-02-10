import React from 'react';
import { CreateToDo } from './components/CreateToDo'
import { ToDoList } from './components/ToDoList'
import './App.css';

class App extends React.Component {
  state = {
    list: [],
    selectAll: false,
  }

  addItem = data => {
    const nextItem  = [data, ...this.state.list];
    this.setState({ list: nextItem });
  };

  checkedAll = (bool) => {
    this.setState({selectAll: bool})
  }

  render() {
    const {list, selectAll} = this.state
    const showAll = list.length === 0 ? 'non-visible' : 'visible'
    return(
      <div className = "container">
        <h1>todos</h1>
        <div className="item">
          <CreateToDo visible={showAll} addToDo={this.addItem} checkedAll={this.checkedAll} list={list}/>
        </div>
        <ToDoList list={this.state.list} selectAll={selectAll}/>
      </div>
    )
  }
}

export default App;
