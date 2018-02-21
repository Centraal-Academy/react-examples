import React, { Component } from 'react'

class LifeCycleComponent extends Component {
  constructor (props) {
    super(props)
    console.log('The element was created')
  }

  componentWillMount () {
    console.log('This element will be mounted in the DOM')
  }

  componentDidMount () {
    console.log('This element was mount in the DOM')
  }

  componentWillUnmount () {
    console.log('This element will be removed of the DOM')
  }

  render () {
    return (<h2>Look the console :3</h2>)
  }
}

export default LifeCycleComponent
