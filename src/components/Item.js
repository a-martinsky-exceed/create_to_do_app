import React from 'react'

class Item extends React.Component {
  state = {
    toDoName: this.props.text,
    disableEdit: true,
    hiddenButton: 'non-visible',
  }

  changeValue = (e) => {
    this.setState({toDoName: e.currentTarget.value})
  }

  handleChecked = (e) => {
    this.props.onCheck(this.props.id, e.currentTarget.checked)
  }

  startRename = (e) => {
    this.setState({disableEdit: false})
  }

  endRename = (e) => {
    this.setState({disableEdit: true})
  }

  // show delete button
  hover = () => {
    this.setState({hiddenButton: 'visible'})
  }

  //hide delete button
  revertHover = () => {
    this.setState({hiddenButton: 'non-visible'})
  }

  getIdToDestroy = (e, id) => {
    this.props.addId(id)
    this.props.setMode(e)
  }

  render() {
    const { toDoName, disableEdit, hiddenButton } = this.state
    const { id, checked, textDecoration } = this.props
    const klassName= textDecoration + ' name'
    return (
      <div className='item' onMouseMove={this.hover} onMouseOut={this.revertHover}>
        <div className="checkboxWrapper">
          <input id="item_checkbox" className="checkbox" onChange={this.handleChecked} checked={checked} type="checkbox"/>
          <label htmlFor="item_checkbox" />
        </div>

        <input id={id} className={klassName}
          onChange={this.changeValue}
          readOnly={disableEdit}
          onDoubleClick={this.startRename}
          onBlur={this.endRename}
          value={toDoName}/>

        <button id="deleteItem"
                name="getIdToDestroy"
                className={hiddenButton}
                onMouseMove={this.hover}
                onMouseOut={this.revertHover}
                onClick={(e)=>this.getIdToDestroy(e, id)}>×</button>
      </div>
    )
  }
}

export { Item }
