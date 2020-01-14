import React, { Component } from 'react'

const HButton = ({ children }) => <button>{children}</button>

export interface Test {
  testa: string
  testb: string
}

class HelloWorld extends Component {
  handleClick() {
    console.log('je;l;p-')
  }

  render() {
    debugger
    return (
      <HButton onClick={this.handleClick.bind(this)} disabled>
        123
      </HButton>
    )
  }
}