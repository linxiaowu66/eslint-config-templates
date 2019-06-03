import React from 'react'
import { render } from 'react-dom'
import Test from 'test'

class App extends React.Component {
  componentWillReceiveProps() {}

  render() {
    return (
      <div>
        <Test />
      </div>
    )
  }
}

render(App(), document.getElementById('app'))
