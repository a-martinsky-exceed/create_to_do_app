import React from 'react';
import { Item } from './Item'

class ToDoList extends React.Component {
  state = {
    idsToDelete: []
  }

  filteredList = (list, mode, buttons) => {
    const {idsToDelete} = this.state
    if(mode === 'getIdToDestroy') {
      return this.props.deleteFromList(idsToDelete)
    }
    return buttons[mode](list, idsToDelete)
  }

  // prepare to delete item (called on item)
  addId = (id) => {
    const ids  = [id, ...this.state.idsToDelete]
    this.setState({idsToDelete: ids})
  }

  saveNewText = (id, newText) => {
    let {list, updateArray} = this.props
    list.map(elem => {
      if (elem.id === id){
        return {...elem.text = newText}
      } else{
        return {...elem}
      }
    })
    return updateArray(list)
  }

  renderList = (list, selectAll, addId, setMode, onCheck, saveNewText) => {
    let items
    if (list.length) {
      items = list.map(function(item) {
        return <Item key={item.id}
                id={item.id}
                text={item.text}
                checked={item.isChecked}
                addId={addId}
                setMode={setMode}
                onCheck={onCheck}
                textDecoration={item.textDecoration}
                saveNewText={saveNewText}/>
      })
    }
    else {
      items = null;
    }
    return items
  }

  render() {
    const {list, buttons, mode, selectAll, setMode, onCheck} = this.props
    const data = this.filteredList(list, mode, buttons)
    return (
      <React.Fragment>
        {this.renderList(data, selectAll, this.addId, setMode, onCheck, this.saveNewText)}
      </React.Fragment>
    )
  }
}

export { ToDoList }
