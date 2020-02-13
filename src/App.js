import React from 'react';
import { CreateToDo } from './components/CreateToDo'
import { ToDoList } from './components/ToDoList'
import { Buttons } from './components/Buttons'
import './App.css';

class App extends React.Component {
  state = {
    list: [],
    selectAll: false,
    disableSelectAll: true,
    mode: "showAll",
    left: 0
  }

  addItem = data => {
    const nextItem  = [data, ...this.state.list]
    this.setState({ list: nextItem, disableSelectAll: false })
  }

  deleteFromList = (ids) => {
    const {list} = this.state
    list.forEach((item, i) => {
      if(ids.includes(item.id)) {
        list.splice(list[i-1], 1)
      }
    });
    return list
  }

  // using when item was renamed
  updateArray = (newList) => {
    this.setState({list: newList})
  }

  checkedAll = (bool) => {
    this.setState({selectAll: bool})
    const {list, selectAll} = this.state
    const arr = list
    for(let i in arr) {
      arr[i].isChecked = !selectAll
    }
    this.setState({list: arr})
    this.setState({left: 0})
  }

  setFilterMode = (e) => {
    this.setState({mode: e.currentTarget.name})
  }

  // count items left when it created, and when 'selectAll' pressed
  countLeft = () => {
    const {list, selectAll} = this.state
    const newArr = list.map(elem => {
      if (elem.id === 1){
        return {...elem.isChecked = !elem.isChecked}
      } else{
        return {...elem}
      }
    })
    newArr.filter(item => item.isChecked)
    this.setState({left: newArr.length})
    if(!selectAll) {
      this.setState({left: 0})
    }
  }

// up item checkbox status, change 'left todos' value by click on item checkbox,
// add styling class when item's checkbox is checked
  onCheck = (id, bool) => {
    const {list} = this.state
    const arr = list
    const targetItem = arr.findIndex(item => item.id === id)
    let count = 0
    arr[targetItem].isChecked = bool

    let klassName = arr[targetItem].textDecoration
    arr[targetItem].isChecked ? klassName = 'line' : klassName = ''
    arr[targetItem].textDecoration = klassName

    for(let i = 0; i < list.length; i++) {
      if(list[i].isChecked === false) {
        count++
      }
    }

    this.setState({list: arr})
    this.setState({left: count})
    console.log('onCheck')
  }

  // footer buttons
  buttons = {
    showAll(items) {
      return items
    },

    showActive(items) {
      return items.filter(item => item.isChecked === false)
    },

    showCompleted(items) {
      return items.filter(item => item.isChecked === true)
    },

    clearCompleted(items) {
      return items.filter(item => item.isChecked === false)
    }
  }


  render() {
    const {list, selectAll, mode, left, disableSelectAll} = this.state
    const klassNameBold = list.every(item => item.isChecked) ? 'bold' : ''
    return(
      <div className = "container">
        <h1>todos</h1>
        <div className="item">
          <CreateToDo addToDo={this.addItem}
                      checkedAll={this.checkedAll}
                      list={list}
                      countLeft={this.countLeft}
                      disableSelectAll={disableSelectAll}
                      klassNameBold={klassNameBold} />
        </div>
        <ToDoList list={list}
                  buttons={this.buttons}
                  mode={mode}
                  setMode={this.setFilterMode}
                  deleteFromList={this.deleteFromList}
                  selectAll={selectAll}
                  onCheck={this.onCheck}
                  updateArray={this.updateArray}/>
        {list.length ? <Buttons left={left} setMode={this.setFilterMode} /> : null}
      </div>
    )
  }
}

export default App;
