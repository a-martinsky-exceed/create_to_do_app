import React from 'react';

class CreateToDo extends React.Component {
    state = {
      text: '',
      active: ''
}

  changeValue = (e) => {
    this.setState({text: e.currentTarget.value})
  }

  createItem = (e) => {
    const { text } = this.state
    if(e.key === 'Enter') {
      this.props.addToDo({
        id: +new Date(),
        text: text,
        status: false
      })
    }
    this.setState({active: false})
  }

  handleChecked = (e) => {
    const bool = e.currentTarget.checked
    this.props.checkedAll(bool)
  }

  render() {
    const {text} = this.state
    const {visible, not_active} = this.props
    const klassName = visible + ' checkbox'
    return(
      <React.Fragment>
        <div className="checkboxWrapper"><input className={klassName} onChange={this.handleChecked} type="checkbox" disabled={not_active} /></div>
        <input className="name" onKeyPress={this.createItem} onChange={this.changeValue} value={text} type="text" placeholder="What needs to be done?"/>
      </React.Fragment>
    )
  }
}

export { CreateToDo }
