import React from 'react';

class CreateToDo extends React.Component {
  state = {
    text: ''
  }

  changeValue = (e) => {
    this.setState({text: e.currentTarget.value})
  }

  createItem = (e) => {
    const { text } = this.state
    if(text.length && e.key === 'Enter') {
      this.props.addToDo({
        id: +new Date(),
        text: text,
        isChecked: false,
        textDecoration: ''
      })
      this.setState({text: ''})
      this.props.countLeft()
    }
  }

  handleChecked = (e) => {
    const bool = e.currentTarget.checked
    this.props.checkedAll(bool)
    this.props.countLeft()
  }

  render() {
    const {text} = this.state
    const {list, disableSelectAll} = this.props
    const klassName = list.length ? 'visible ' : 'non-visible '
    return(
      <React.Fragment>
        <div className="checkboxWrapper">
          <input  id="selectAll"
                  onChange={this.handleChecked}
                  type="checkbox"
                  disabled={disableSelectAll} />
          <label htmlFor="selectAll" className={klassName}/>
        </div>

        <input className="name"
              onKeyPress={this.createItem}
              onChange={this.changeValue}
              value={text}
              type="text"
              placeholder="What needs to be done?"/>
      </React.Fragment>
    )
  }
}

export { CreateToDo }
