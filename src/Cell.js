import React from 'react' 

class Cell extends React.Component {
  constructor(props) {
    super()
    this.state = { color: props.value }
  }

  update = () => {
    this.setState({
      color: '#333'
    })
  }
  render() {
    return(
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.update}></div>
    )
  }
}

export default Cell