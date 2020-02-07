import React from 'react'

class Item extends React.Component {
  render() {
    const { key, text } = this.props
    return (
      <React.Fragment>
        <input key = {key} type = "checkbox" />
        <input key = {key} type = "text" value = {text} />
      </React.Fragment>
    )
  }
}

export { Item }
