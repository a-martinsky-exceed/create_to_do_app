import React from 'react'

class Item extends React.Component {
  state = {
    toDoName: this.props.text,
    active: true,
    hiddenItem: '',
    hiddenButton: 'hidden',
    checkedThis: false
  }

  changeValue = (e) => {
    this.setState({toDoName: e.currentTarget.value})
  }

  handleChecked = (e) => {
    this.setState({checkedThis: e.currentTarget.checked})
  }

  startRename = (e) => {
    this.setState({active: false})
  }

  endRename = (e) => {
    this.setState({active: true})
  }

  hover = () => {
    this.setState({hiddenButton: ''})
  }

  revertHover = () => {
    this.setState({hiddenButton: 'hidden'})
  }

  hideItem = () => {
    this.setState({hiddenItem: 'hidden'})
  }

  // revertHideItem = () => {
  //   this.setState({hiddenItem: ''})
  // }

  render() {
    const { toDoName, active, hiddenItem, hiddenButton, checkedThis } = this.state
    const { id, checked } = this.props
    const klassName = hiddenItem + ' item'
    return (
      <div className={klassName} onMouseMove={this.hover} onMouseOut={this.revertHover}>
        <div className="checkboxWrapper">
          <input className="checkbox" onChange={this.handleChecked} type="checkbox" checked={checked || checkedThis}/>
        </div>

        <input id={id} className="name"
          onChange={this.changeValue}
          readOnly={active}
          onDoubleClick={this.startRename}
          onBlur={this.endRename} value={toDoName} />

        <button id="hideItem" className={hiddenButton} onMouseMove={this.hover} onClick={this.hideItem} />
      </div>
    )
  }
}

export { Item }
