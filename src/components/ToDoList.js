import React from 'react';
import { Item } from './Item'
import { Buttons } from './Buttons'

class ToDoList extends React.Component {
  renderList = (list, selectAll) => {
    let items
    if (list.length) {
      items = list.map(function(item) {
        return <Item key={item.id} id={item.id} text={item.text} checked={selectAll} />
      })
    }
    else {
      items =  null;
    }
    return items
  }

  render() {
    const {list, selectAll} = this.props
    return (
      <React.Fragment>
        {this.renderList(list, selectAll)}
        {list.length ? <Buttons items={list} /> : null}
      </React.Fragment>
    )
  }
}

export { ToDoList }
