import React from 'react';
import { Item } from './Item'

class ToDoList extends React.Component {
  renderList = () => {
    const list = this.props
    let items = null

    if (list.length) {
      items = list.map(function(item) {
        return (
          <Item key = {item.id} text = {item.text} />
        )
      })
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    )
  }
}

export { ToDoList }
