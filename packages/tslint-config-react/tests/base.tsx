import * as React from 'react'

class Person extends React.Component {
  name: string
  age: number

  render() {
    return <button
      name={{
        name: 'zaihui',
      }}
      disabled
    >
      Zaihui
    </button>
  }
}
