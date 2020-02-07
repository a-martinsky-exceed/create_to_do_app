import React from 'react';

class CreateToDo extends React.Component {
    state = {
      id: null,
      text: ''
    }

  changeValue = (e) => {
    this.setState({text: e.currentTarget.value})
  }

  createItem = (e) => {
    const { id, text } = this.state
    if(e.key === 'Enter') {
      this.props.addToDo({
        id: Date.now(),
        text: text
      })
    }
    this.setState({visible: null, active: false})
  }

  render() {
    const {text} = this.state
    return(
      <React.Fragment>
        <input id = "name" onKeyPress = {this.createItem} onChange = {this.changeValue} value = {text} type = "text" placeholder = "What needs to be done?"/>
      </React.Fragment>
    )
  }
}

export { CreateToDo }
