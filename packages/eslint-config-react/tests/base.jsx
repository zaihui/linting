import React, { Component } from 'react'

const HButton = ({ children }) => <button>{children}</button>

class HelloWorld extends Component {
  handleClick() {
  }

  render() {
    return (
      <HButton onClick={this.handleClick.bind(this)} disabled>
        123
      </HButton>
    )
  }
}
