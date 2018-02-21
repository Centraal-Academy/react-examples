import React from 'react'
import ReactDOM from 'react-dom'
// import Hello from './samples/1-hello/Hello'
// import HelloFunction from './samples/2-jsx-components/HelloFunction'
import LifeCycleComponent from './samples/3-lifecycles/LifeCycleComponent'

const mainElement = document.getElementById('app')

// ReactDOM.render(<Hello />, mainElement)
// ReactDOM.render(<HelloFunction />, mainElement)
ReactDOM.render(<LifeCycleComponent />, mainElement)
