import React from 'react';

class SelectAllButton extends React.Component {
  constructor(props) {
    super(props)
  }

  btn = () => {
    alert('clicked')
  }

  render() {
    return(
      <React.Fragment>
        <button id = {this.props.id} onClick = {this.btn} className = {this.props.visible} disable = {this.props.active}></button>
      </React.Fragment>
    )
  }
}


export { SelectAllButton }
