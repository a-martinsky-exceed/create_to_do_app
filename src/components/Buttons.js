import React from 'react';
import { Item } from './Item'

class Buttons extends React.Component {

  showAll = (items) => {

  }

  clearCompleted = (items) => {
    items.map(function(item) {
      if(item.checked === true) {
        this.setState({hidden: 'hidden'})
      }
    })
  }

  render() {
    const {items} = this.props
    const left = items.map(function(item){
      let i = 0
      // if(item.checkedThis === false) {
        ++i
      // }
      return i
    })
    console.log(left)
    return(
      <div className="footer">
        <div>
          {left} items left
        </div>
        <div onClick={this.showAll(items)}>
          All
        </div>
        <div>
          <button onClick={this.showAll(items)} />Active
        </div>
        Completed
        <div onClick={this.clearCompleted(items)}>Clear Completed</div>
      </div>
    )
  }
}

export { Buttons }
