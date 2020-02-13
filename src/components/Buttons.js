import React from 'react';

class Buttons extends React.Component {
  render() {
    const {left, setMode} = this.props
    return(
      <div className="footer">
        <button disabled>{left} left</button>
        <button name="showAll" onClick={setMode}>All</button>
        <button name="showActive" onClick={setMode}>Active</button>
        <button name="showCompleted" onClick={setMode}>Completed</button>
        <button name="clearCompleted" onClick={setMode}>Clear Completed</button>
      </div>
    )
  }
}

export { Buttons }
